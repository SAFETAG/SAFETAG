import { graphql, withPrefix } from "gatsby"
import mapValues from "lodash.mapvalues"
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

export function processSections(frontmattermd, allFootnotes) {
  let footnotes = []
  let sections = mapValues(frontmattermd, section => {
    if (section && section.html) {
      let hasFootnotes = false
      Object.keys(allFootnotes).forEach(
        key => {
          if (section.rawMarkdownBody.includes(key)) {
            hasFootnotes = true
            if (!(footnotes.filter(fn => fn.key == key).length)) {
              footnotes.push({
                key: key,
                md: allFootnotes[key],
                html: remark().use(remarkHTML).processSync(allFootnotes[key]).contents
                  .replace(/<p>/g, ' ')
                  .replace(/<\/p>/g, '')
                  ,
              })
            }
          }
        }
      )
      if (hasFootnotes) {
        footnotes.forEach(
          (fn, index) => {
            fn.index = index + 1
            section.rawMarkdownBody = section.rawMarkdownBody.replace(
              `[^${fn.key}]`,
              `[[${fn.index}]](#${fn.key})`
            )
          }
        )
        // regenerate HTML rendering with updated footnote refs
        section.html = remark().use(remarkHTML).processSync(section.rawMarkdownBody).contents
      }
      // Fix images URL by adding app root url with prefix
      return section.html
        .replace(
          /<img src="\/img/g,
          `<img src="${withPrefix("/img")}`
        ).replace(
          /\^,\^/g,
          ' '
        )
    }
    return section
  })
  return {sections: sections, footnotes: footnotes}
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
