import React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types"
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
  ListboxGroup,
  ListboxGroupLabel,
} from "@reach/listbox"
import VisuallyHidden from "@reach/visually-hidden"
import styled from "styled-components"
import { themeVal } from "../styles/utils/general"
import { antialiased } from "../styles/helpers"
import { FormCheckable } from "../styles/form/checkable"

const FilterItem = styled(ListboxOption)`
  display: flex;
  cursor: pointer;
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.regular")};
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  align-items: center;

  &:hover,
  &:active {
    background: ${themeVal("color.primary")};
    [data-selected] {
      background: ${themeVal("color.primary")};
    }
  }
`

const FilterListHeader = styled(ListboxGroupLabel)`
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.bold")};
  padding: 1rem;
`

const FilterButton = styled(ListboxButton)`
  ${antialiased()}
  user-select: none;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 2rem;
  font-size: 1rem;
  padding: 0.5rem 2.5rem 0.5rem 1.5rem;
  width: 100%;
  background: none;
  text-shadow: none;
  border: 0;
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.bold")};
  cursor: pointer;
  position: relative;
  border: solid 1px ${themeVal("color.baseMed")};
  &:after {
    content: "";
    position: absolute;
    border: solid black;
    border-width: 0 2px 2px 0;
    padding: 4px;
    top: 1.125rem;
    right: 1.5rem;
    transform: rotate(45deg);
  }
  &:hover {
    background: ${themeVal("color.mist")};
    border-color: ${themeVal("color.base")};
  }
`

const FilterPopover = styled(ListboxPopover)`
  max-height: 24rem;
  overflow-y: auto;
  overflow-y: overlay;
  overflow-x: hidden;
  min-width: 26rem;
  background: white;
  border: solid 1px black;
  &:active,
  &:focus {
    outline-color: ${themeVal("color.primary")};
  }
`
function Filter({ title, type, options, selected, setFilter }) {
  const { t } = useTranslation('site', { useSuspense: false })
  const selectedIds = selected[type] ? selected[type] : []

  return (
    <>
      <VisuallyHidden id="filter-guide"><Trans i18nKey="filter-by">Filter by</Trans> {title}</VisuallyHidden>
      <ListboxInput
        name="filter"
        aria-labelledby="filter-guide"
        onChange={value => {
          if (selectedIds.includes(value)) {
            setFilter({
              ...selected,
              [type]: selected[type].filter(f => f !== value),
            })
            // removeFilter(value)
          } else {
            setFilter({
              ...selected,
              [type]: [...selected[type], value],
            })
            // addFilter(value)
          }
        }}
      >
        <FilterButton title={`${t("Filter by")} ${title}`)}>{title}</FilterButton>
        <FilterPopover>
          <ListboxList>
            <ListboxGroup>
              <FilterListHeader>{title}</FilterListHeader>
              {options.map(option => (
                <FilterItem
                  key={option.id}
                  value={option.id}
                  selected={!!selectedIds.includes(option.id)}
                >
                  <FormCheckable
                    type="checkbox"
                    id={option.id}
                    name={option.id}
                    checked={selectedIds.includes(option.id)}
                    readOnly
                  ></FormCheckable>
                  {option.label || option.id}
                </FilterItem>
              ))}
            </ListboxGroup>
          </ListboxList>
        </FilterPopover>
      </ListboxInput>
    </>
  )
}

Filter.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.object,
  setFilter: PropTypes.func,
}

export default Filter
