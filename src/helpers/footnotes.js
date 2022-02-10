import { withPrefix } from "gatsby"
import remark from 'remark'
import remarkHTML from 'remark-html'

export function loadAllFootnotes(referenceEdges, langKey) {
  // load and parse all footnotes
  const footnotesNode = referenceEdges.filter(
    r => r.node.fields.slug.includes('footnotes') && r.node.fields.langKey == langKey
  )[0]
  const footnotesMD = footnotesNode.node.rawMarkdownBody
  const allFootnotes = {}
  // format them into a key-content object
  footnotesMD.split('\n\n').forEach(
    line => {
      line = line.trim()
      if (line && !line.startsWith('<!--')) {
        const key = line.split(':')[0].replace('[^', '').replace(']', '').replace(/"/g, '')
        const value = line.replace(':', '|').split('|')[1]
        allFootnotes[key] = value
      }
    }
  )
  return allFootnotes
}

export function processSections(frontmattermd, allFootnotes, existingFootnotes) {
  let footnotes = []
  if (existingFootnotes) {
    footnotes = existingFootnotes
  }
  // use a deep copy so as not to alter the original object
  let sections = Object.assign({}, frontmattermd)

  Object.keys(sections).forEach(sectionName => {
    let section = sections[sectionName]
    if (section && (section.rawMarkdownBody || (typeof section === 'string' || section instanceof String))) {
      let content
      if (section.rawMarkdownBody) {
        section = Object.assign({}, section)
        // make a copy of the string - https://stackoverflow.com/a/31733628/122400
        content = (' ' + section.rawMarkdownBody).slice(1)
      } else {
        section = (' ' + section).slice(1)
        content = (' ' + section).slice(1)
      }
      // TODO: Redo this with regexes
      Object.keys(allFootnotes).forEach(key => {
        if (content.includes(`[^${key}]`) && !(footnotes.filter(fn => fn.key == key).length)) {
          footnotes.push({
            key: key,
            md: allFootnotes[key],
            html: remark().use(remarkHTML).processSync(allFootnotes[key]).contents
              .replace(/<p>/g, ' ')
              .replace(/<\/p>/g, '')
              ,
          })
        }
      })
      footnotes.forEach(
        (fn, index) => {
          fn.index = index + 1
          content = content.replace(
            `[^${fn.key}]`,
            `[[${fn.index}]](#footnotes)`
          )
        }
      )
      content = content.replace( /\^,\^/g, ' ')
      // regenerate HTML rendering with updated footnote refs
      if (!content.includes('[1](')) {
        if (section.rawMarkdownBody) {
          section.rawMarkdownBody = content
        } else {
          section = content
        }
      }
      // fix image URLs
      if (section.rawMarkdownBody) {
        section.html = remark().use(remarkHTML).processSync(section.rawMarkdownBody).contents
          .replace( /<img src="\/img/g, `<img src="${withPrefix("/img")}`)
      }
    }
    sections[sectionName] = section
  })
  return {sections: sections, footnotes: footnotes}
}
