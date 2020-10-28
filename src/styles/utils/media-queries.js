import { css } from "styled-components"

import { mediaRanges } from "../theme/theme"

const buildMediaExp = ([lower, upper], type) => {
  switch (type) {
    case "Up":
      // It makes no sense to have a media query "Up" from nothing.
      // There's no need for a media query in that case.
      if (lower === null) return null
      return `only screen and (min-width: ${lower}px)`
    case "Only":
      // This only makes sense when there are both bounds.
      // Otherwise the "Up" or "Down" can be used with the same result.
      if (lower === null || upper === null) return null
      return `only screen and (min-width: ${lower}px and max-width: ${upper}px)`
    case "Down":
      // It makes no sense to have a media query "Down" from infinity.
      // There's no need for a media query in that case.
      if (upper === null) return null
      return `only screen and (max-width: ${upper}px)`
  }
}

/**
 * Build the media query utility where for each range there is the 'Up', 'Only',
 * and 'Down' options.
 * Logs a warning to the console when the use media query makes no sense,
 * switching to the best alternative possible.
 *
 * Available media queries:
 * xsmallDown
 * smallUp, smallOnly, smallDown
 * mediumUp, mediumOnly, mediumDown
 * largeUp, largeOnly, largeDown
 * xlargeUp
 *
 * To use with style components as:
 *
 * @example
 * media.smallOnly`
 *   color: red;
 * `
 */
const media = Object.keys(mediaRanges).reduce((acc, label) => {
  const range = mediaRanges[label]
  return {
    ...acc,
    ...["Up", "Only", "Down"].reduce((acc_, type) => {
      return {
        ...acc_,
        [`${label}${type}`]: (...args) => {
          let expr = buildMediaExp(range, type)
          if (expr === null && (type === "Up" || type === "Down")) {
            // eslint-disable-next-line
            console.warn(`Media query warning: The specified media query (${label}${type}) has no ${
              range[0] === null ? "lower" : "upper"
            } bound.
There's no need for a media query in this case;
`)
          } else if (expr === null) {
            // eslint-disable-next-line
            console.warn(`Media query warning: The specified media query (${label}${type}) has no ${
              range[0] === null ? "lower" : "upper"
            } bound.
You can use (${label}${range[0] === null ? "Down" : "Up"}) instead.
`)
            expr = buildMediaExp(range, range[0] === null ? "Down" : "Up")
          }

          return expr
            ? css`
                @media ${expr} {
                  ${css(...args)}
                }
              `
            : css(...args)
        },
      }
    }, acc),
  }
}, {})

export default media
