import PDFDocument from "./pdf-document"
import blobStream from "blob-stream"
import { saveAs } from "file-saver"
import marked from "marked"
import pickBy from "lodash.pickby"
import values from "lodash.values"

import IBMPlexSansRegular from "../../static/fonts/IBMPlexSans-Regular.ttf"
import IBMPlexSansBold from "../../static/fonts/IBMPlexSans-Bold.ttf"
import SpaceMonoBold from "../../static/fonts/SpaceMono-Bold.ttf"
import IBMPlexMonoRegular from "../../static/fonts/IBMPlexMono-Regular.ttf"
import SourceCodeProBold from "../../static/fonts/SourceCodePro-Bold.ttf"

marked.setOptions({
  mangle: false,
})

let lastType = null
let styles

// PDF document options
const pdfDocumentOptions = {
  size: "A4",
  margin: 50,
  bufferPages: true,
}

// Image options, please refer to https://pdfkit.org/docs/images.html
const imageOptions = {}

/**
 * Load styles and fonts asynchronously
 */
async function loadMarkdownStyles() {
  // Load font files
  const baseFont = await fetch(IBMPlexSansRegular).then(response =>
    response.arrayBuffer()
  )
  const boldFont = await fetch(IBMPlexSansBold).then(response =>
    response.arrayBuffer()
  )
  const displayFont = await fetch(SpaceMonoBold).then(response =>
    response.arrayBuffer()
  )
  const sourceCodeFont = await fetch(IBMPlexMonoRegular).then(response =>
    response.arrayBuffer()
  )
  const bulletGlyphFont = await fetch(SourceCodeProBold).then(response =>
    response.arrayBuffer()
  )

  // Define markdown formatting
  styles = {
    h1: {
      font: displayFont,
      fontSize: 25,
      padding: 15,
      color: "blue",
    },
    h2: {
      font: displayFont,
      fontSize: 20,
      padding: 10,
      color: "blue",
    },
    h3: {
      font: displayFont,
      fontSize: 16,
      padding: 10,
    },
    h4: {
      font: displayFont,
      fontSize: 14,
      padding: 10,
    },
    h5: {
      font: displayFont,
      fontSize: 12,
      padding: 10,
    },
    h6: {
      font: sourceCodeFont,
      fontSize: 11,
      padding: 10,
    },
    para: {
      font: baseFont,
      fontSize: 10,
      padding: 10,
    },
    code_text: {
      font: sourceCodeFont,
      fontSize: 8,
      padding: 10,
    },
    code: {
      padding: 10,
      background: "#2c2c2c",
    },
    codespan: {
      font: sourceCodeFont,
      fontSize: 8,
    },
    bulletGlyph: {
      font: bulletGlyphFont,
      fontSize: 18,
    },
    bulletlist: {
      font: baseFont,
      fontSize: 10,
    },
    strong: {
      font: boldFont,
      fontSize: 10,
    },
    em: {
      font: boldFont,
      fontSize: 10,
    },
    list_item: {
      font: baseFont,
      fontSize: 10,
      padding: 6,
    },
    link: {
      font: baseFont,
      fontSize: 10,
      color: "blue",
      underline: true,
    },
    example: {
      font: baseFont,
      fontSize: 9,
      color: "black",
      padding: 10,
    },
    imageCaption: {
      font: baseFont,
      fontSize: 9,
      fillColor: "black",
      textOptions: {
        align: "center",
      },
    },
  }
}

// This class represents a node in the markdown tree, and can render it to pdf
class Node {
  constructor(node) {
    this.type = node.type
    this.attrs = { ...node }

    if (this.type === "text") {
      this.text = node.raw
    }

    if (this.type === "codespan") {
      this.text = node.text
    }

    // parse sub nodes
    this.content = []
    if (this.type === "list_item") {
      const token = node.tokens[0]
      if (token) {
        this.content =
          token.type === "text" ? node.tokens[0].tokens : token.items
      }
    } else if (this.type !== "table") {
      this.content = node.tokens || node.items || []
    }

    this.content = this.content.map(subNode => new Node(subNode))

    switch (this.type) {
      case "heading":
        this.type = `h${this.attrs.depth}`
        break

      case "code":
        this.content = [
          new Node({
            type: "code_text",
            text: this.attrs.text,
            continued: false,
          }),
        ]
        break
    }

    this.style = styles[this.type] || styles.para
  }

  // sets the styles on the document for this node
  setStyle(doc) {
    if (this.style.font) {
      doc.font(this.style.font)
    }

    if (this.style.fontSize) {
      doc.fontSize(this.style.fontSize)
    }

    if (this.style.color || this.attrs.color) {
      doc.fillColor(this.style.color || this.attrs.color)
    } else {
      doc.fillColor("black")
    }

    const options = {}
    options.align = this.style.align
    options.link = this.attrs.href || null // override continued link
    if (this.attrs.continued != null) {
      options.continued = this.attrs.continued
    }
    return options
  }

  // renders this node and its subnodes to the document
  async render(doc, continued, bulletListLevel = 0) {
    if (continued == null) {
      continued = false
    }
    switch (this.type) {
      case "table": {
        const options = this.setStyle(doc)
        doc.table(this.attrs, options)
        break
      }
      case "image": {
        const filePath = this.attrs.href
        const fileExt = filePath.split(".").pop()

        // Supported format are png/jpg
        if (["png", "jpg"].indexOf(fileExt) > -1) {
          try {
            // first we need to determine if we require a new page,
            // otherwise the image gets cut off
            const img = new Image()
            img.name = filePath
            img.src = filePath
            if ( (img.height + doc.y + doc.currentLineHeight(true) +
                  doc.page.margins.top + doc.page.margins.bottom) > doc.page.maxY()
                ) {
              console.log(`Info: Image ${filePath} doesn't fit on this page, moving to a new page`)
              doc.addPage();
            }

            const imageFile = await fetch(filePath).then(res =>
              res.arrayBuffer()
            )
            doc.image(imageFile, imageOptions)
          } catch (error) {
            // eslint-disable-line
            console.log("Could not add image to PDF file: ", filePath)
            console.log(error)
          }

          // Add image caption, if available
          const { title } = this.attrs
          if (title) {
            doc.font(styles.imageCaption.font)
            doc.fontSize(styles.imageCaption.fontSize)
            doc.fillColor(styles.imageCaption.fillColor)
            doc.text(title, styles.imageCaption.textOptions)
          }
        }

        break
      }
      case "hr":
        doc.addPage()
        break
      case "codespan":
        doc.text(this.text, { options: this.setStyle(doc), continued })
        break
      case "code_text": {
        const codeWidth = doc.page.width - (doc.page.margins.left + doc.page.margins.right);
        const codeHeight = doc.heightOfString(this.attrs.text, { codeWidth });
        doc.rect(doc.page.margins.left - 10, doc.y - 5, codeWidth + 16, codeHeight).fill("#f5f5f5");
        doc.text(this.attrs.text, this.setStyle(doc))
        break
      }
      default:
        // loop through subnodes and render them
        for (let index = 0; index < this.content.length; index++) {
          const fragment = this.content[index]
          if (fragment.type === "text") {
            // add a new page for each heading, unless it follows another heading
            if (
              ["h1", "h2"].includes(this.type) &&
              lastType != null
            ) {
              doc.addPage()
            }

            if (this.type === "h1") {
              fragment.text = fragment.text.toUpperCase()
              doc.rect(50, 88, 495, 2).fill("blue");
              doc.h1Outline = doc.outline.addItem(fragment.text)
            } else if (this.type === "h2" && doc.h1Outline) {
              doc.rect(50, 48, 495, 2).fill("blue");
              doc.h2Outline = doc.h1Outline.addItem(fragment.text)
            } else if (this.type === "h3" && doc.h2Outline) {
              doc.h3Outline = doc.h2Outline.addItem(fragment.text)
            } else if (this.type === "h4" && doc.h3Outline) {
              doc.h4Outline = doc.h3Outline.addItem(fragment.text)
            } else if (this.type === "h5" && doc.h4Outline) {
              doc.h5Outline = doc.h4Outline.addItem(fragment.text)
            } else if (this.type === "h6" && doc.h5Outline) {
              doc.h6Outline = doc.h5Outline.addItem(fragment.text)
              fragment.text = fragment.text.toUpperCase()
            }

            // set styles and whether this fragment is continued (for rich text wrapping)
            const options = this.setStyle(doc)
            if (options.continued == null) {
              options.continued = continued || index < this.content.length - 1
            }

            // remove newlines unless this is code
            if (this.type !== "code") {
              fragment.text = fragment.text.replace(/[\r\n]\s*/g, " ")
            }

            doc.text(fragment.text, options)
          } else {
            const options = this.setStyle(doc)
            if (this.type === "list") {
              if (bulletListLevel > 0) {
                if (index === 0) {
                  doc.text(" ")
                } else if (index === 1) {
                  doc.y -= 6
                }
                doc.font(styles.bulletGlyph.font)
                doc.fontSize(styles.bulletGlyph.fontSize)
                doc.text(`\u25A0 `, {
                  ...options,
                  continued: true,
                  indent: 10 * bulletListLevel,
                  baseline: 'middle',
                  paragraphGap: 2,
                }).moveDown(0.05);
              } else {
                doc.font(styles.bulletGlyph.font)
                doc.fontSize(styles.bulletGlyph.fontSize)
                doc.text(`\u25A0 `, {
                   ...options,
                   continued: true,
                   baseline: 'middle',
                   paragraphGap: 2,
                }).moveDown(0.05);
              }
            }

            await fragment.render(
              doc,
              index < this.content.length - 1 && this.type !== "list",
              this.type === "list" ? bulletListLevel + 1 : bulletListLevel
            )
          }

          lastType = this.type
        }
    }

    if (this.style.padding) {
      return (doc.y += this.style.padding)
    }
  }
}

// reads and renders a markdown/literate javascript file to the document
const render = async (doc, markdownContent) => {
  const tree = marked.lexer(markdownContent)

  const result = []
  while (tree.length) {
    const node = new Node(tree.shift())
    const renderedNode = await node.render(doc)
    result.push(renderedNode)
  }
  return result
}
/**
 * Creates htmlNodes for guide creation
 * @param  {object} guideVersion
 * @param  {string} guideTitle
 * @param  {object} fixedSections
 * @param  {bool} isFull
 * @returns {func}
 */

export async function prepareGuide(
  guideVersion,
  guideTitle,
  fixedSections,
  isFull = true,
  t,
) {
  // Init guide by add fixed sections on start
  const d = new Date()
  const dateString = d.toUTCString()

  const generatedNote = `_${t("guide-gen-date", "This custom guide was generated on")} ${dateString}. ${t("guide-notice", "Create your own custom guide or get the full guide at www.safetag.org")}_`
  var intro = fixedSections["introduction.md"] + '\n' + generatedNote
  const customGuide = [
    intro,
    fixedSections["section_1.md"],
    `# ${t("guide-methods", "Safetag Methods")}`,
  ]
  values(guideVersion).map(({ title, method_icon, references, activities, tools,
          summary, purpose, guiding_questions, outputs, operational_security,
          preparation }) => {
    const selectedActivities = isFull
      ? values(pickBy(activities))
      : values(pickBy(activities, a => a.checked))

    // If there are activities selected on this method
    if (selectedActivities.length > 0) {
      // Add method title
      customGuide.push(`## ${title}`)
      if (method_icon) {
        customGuide.push(`![](${method_icon})`)
      }

      // Add method sections
      if (summary) {
        customGuide.push(`### ${t("method-title-summary", "Summary")}`)
        customGuide.push(summary)
      }
      if (purpose) {
        customGuide.push(`### ${t("method-title-purpose", "Purpose")}`)
        customGuide.push(purpose)
      }
      if (guiding_questions) {
        customGuide.push(`### ${t("method-title-questions", "Guiding Questions")}`)
        customGuide.push(guiding_questions)
      }
      if (outputs) {
        customGuide.push(`### ${t("method-title-outputs", "Outputs")}`)
        customGuide.push(outputs)
      }
      if (operational_security) {
        customGuide.push(`### ${t("method-title-opsec", "Operational Security")}`)
        customGuide.push(operational_security)
      }
      if (preparation) {
        customGuide.push(`### ${t("method-title-prep", "Preparation")}`)
        customGuide.push(preparation)
      }

      customGuide.push(`### ${t("method-title-activities", "Activities")}`)
      selectedActivities.forEach(
        ({
          title,
          toolnames,
          sections: {
            summary,
            overview,
            materials_needed,
            considerations,
            walk_through,
            recommendations,
          },
        }) => {
          // Add activity title
          customGuide.push(`#### ${title}`)

          // Add activities sections
          if (summary && summary.rawMarkdownBody) {
            customGuide.push(`##### ${t('activity-summary', "Summary")}`)
            customGuide.push(summary.rawMarkdownBody)
          }
          if (overview && overview.rawMarkdownBody) {
            customGuide.push(`##### ${t('activity-overview', "Overview")}`)
            customGuide.push(overview.rawMarkdownBody)
          }
          if (materials_needed && materials_needed.rawMarkdownBody) {
            customGuide.push(`##### ${t('activity-materials', "Materials Needed")}`)
            customGuide.push(materials_needed.rawMarkdownBody)
          }
          if (considerations && considerations.rawMarkdownBody) {
            customGuide.push(`##### ${t('activity-considerations', "Considerations")}`)
            customGuide.push(considerations.rawMarkdownBody)
          }
          if (walk_through && walk_through.rawMarkdownBody) {
            customGuide.push(`##### ${t('activity-walkthrough', "Walk Through")}`)
            customGuide.push(walk_through.rawMarkdownBody)
          }
          if (toolnames) {
            customGuide.push(`##### ${t('activity-tools', "Tools and variants")}`)
            toolnames.forEach((toolname) => {
              const tool = tools[toolname]
              customGuide.push(`###### ${tool.title}`)
              customGuide.push(tool.rawMarkdownBody)
            })
          }
          if (recommendations && recommendations.rawMarkdownBody) {
            customGuide.push(`##### ${t('activity-recommendations', "Recommendations")}`)
            customGuide.push(recommendations.rawMarkdownBody)
          }
        }
      )
      if (Object.keys(references).length > 0) {
        customGuide.push(`### ${t("guide-references", "References and resources for ")} ${title}`)
        values(references).forEach(({ id, rawMarkdownBody }) => {
          customGuide.push(`#### ${id}`)
          customGuide.push(rawMarkdownBody)
        })
      }
    }
  })

  customGuide.push(fixedSections["section_3.md"])
  customGuide.push(fixedSections["section_4.md"])
  customGuide.push(fixedSections["section_5.md"])

  return await generateGuide(customGuide.join("\n\n"), guideTitle, t)
}

export default async function generateGuide(md, guideTitle, t) {
  // Load styles
  await loadMarkdownStyles()

  // Create a document
  const doc = new PDFDocument(pdfDocumentOptions)

  // Create stream
  const stream = doc.pipe(blobStream())
  const todaysDate = new Date().toISOString().slice(0, 10)
  // Add content
  await render(doc, md)

  //Global Edits to All Pages (Header/Footer, etc)
  let pages = doc.bufferedPageRange();
  for (let i = 1; i < pages.count; i++) {
    doc.switchToPage(i);

    //Footer: Add page number
    let oldBottomMargin = doc.page.margins.bottom;
    doc.page.margins.bottom = 0 // Have to remove bottom margin in order to write into it
    doc.rect(0, doc.page.height - 40, doc.page.width, doc.page.height - 40).fill("#fafafa")
    doc.rect(0, doc.page.height - 40, doc.page.width, 1).fill("#dbdbdb")
    doc
      .fillColor("#454644")
      .fontSize(8)
      .text(
        t("guide-footer", "SAFETAG™: A Project of Internews"),
        50,
        doc.page.height - (oldBottomMargin/2),
        { align: 'left' }
      )
      .text(
        `${t("guide-page-number", "Page")} ${i + 1} ${t("guide-page-number-of", "of")} ${pages.count}`,
        0,
        doc.page.height - (oldBottomMargin/2), // Centered vertically in bottom margin
        { align: 'right' }
      );
    doc.page.margins.bottom = oldBottomMargin; // ReProtect bottom margin
  }

  // Finalize PDF file
  doc.end()

  return await stream.on("finish", function () {
    saveAs(stream.toBlob("application/pdf"), `Safetag-${guideTitle}_${todaysDate}.pdf`)
  })
}
