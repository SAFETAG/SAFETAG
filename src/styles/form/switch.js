import React from 'react';
import T from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { visuallyHidden } from '../helpers';
import { themeVal } from '../utils/general';
import { buttonVariationHoverCss, buttonVariationBaseCss } from '../button/button';

/**
 * Renders a FormSwitch component.
 * Under the hood this uses a checkbox
 *
 * @param {string} name (html prop) name to be used as `name` and `id` prop
 *                      of the checkbox.
 * @param {string} title (html prop) Label's title attribute
 * @param {boolean} checked Whether or not the FormSwitch is checked
 * @param {func} onChange Change callbalck for the FormSwitch
 * @param {node} children Content of the label
 * @param {boolean} hideText Whether or not to visually hide the FormSwitch text
 * @param {string} textPlacement Where to position the text. `left` or `right`
 *                  of the toggle.
 */
const FormSwitchElement = props => {
  const {
    children,
    name,
    title,
    checked,
    onChange,
    className,
    hideText,
    textPlacement
  } = props;

  return (
    <label htmlFor={name} className={className} title={title}>
      <input
        type='checkbox'
        name={name}
        id={name}
        value='on'
        checked={checked}
        onChange={onChange}
      />
      {textPlacement === 'right' && <FormOptionUi />}
      <FormOptionText hideText={hideText}>{children}</FormOptionText>
      {textPlacement === 'left' && <FormOptionUi />}
    </label>
  );
};

FormSwitchElement.propTypes = {
  name: T.string,
  textPlacement: T.string,
  className: T.string,
  title: T.string,
  checked: T.bool,
  hideText: T.bool,
  children: T.node,
  onChange: T.func
};

FormSwitchElement.defaultProps = {
  textPlacement: 'left'
};

/**
 * Form option extend. Common code to all form options.
 */
const formOption = css`
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  cursor: pointer;

  input {
    flex: none;
    margin-top: 0.3125rem; /* 5px */
  }
`;

const FormOptionText = styled.span`
  line-height: 1.5;
  ${({ hideText }) => hideText && visuallyHidden()}
`;

const FormOptionUi = styled.span`
  flex: none;
  position: relative;
  transition: all 0.16s ease 0s;
`;

export const FormSwitch = styled(FormSwitchElement)`
  ${formOption}

  input {
    ${visuallyHidden()}
  }

  ${FormOptionUi} {
    margin: 0.375rem 0;
    width: 2.25rem;
    height: 0.75rem;
    border-radius: ${themeVal('shape.ellipsoid')};
    background: ${({ theme }) => rgba(theme.color.base, 0.24)};

    &::before {
      ${props =>
    buttonVariationBaseCss(
      props.theme.type.base.color,
      'raised',
      'light',
      props
    )}
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 2;
      content: '';
      height: 1.25rem;
      width: 1.25rem;
      border-radius: ${themeVal('shape.ellipsoid')};
      transform: translate(0, -50%);
      transition: all 0.24s ease 0s;
    }
  }

  &:hover ${/* sc-selector */FormOptionUi}::before {
    ${props =>
    buttonVariationHoverCss(
      props.theme.type.base.color,
      'raised',
      'light',
      props
    )}
  }

  ${({ checked }) => (checked ? `${FormOptionUi},` : '')}
  input:checked ~ ${FormOptionUi} { /* stylelint-disable-line */
    background: ${themeVal('color.link')};

    &::before {
      left: 100%;
      transform: translate(-100%, -50%);
    }
  }
`;
