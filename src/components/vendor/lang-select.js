var _jsxFileName = "/home/marco/apps/react-languages-select/src/index.js";

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { languages, languagesX } from './languages';

var ReactFlagsSelect = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactFlagsSelect, _Component);

  function ReactFlagsSelect(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var defaultLanguage = languages[_this.props.defaultLanguage] && _this.props.defaultLanguage;
    _this.state = {
      openOptions: false,
      defaultLanguage: defaultLanguage,
      filteredLanguages: []
    };
    _this.toggleOptions = _this.toggleOptions.bind(_assertThisInitialized(_this));
    _this.closeOptions = _this.closeOptions.bind(_assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    _this.filterSearch = _this.filterSearch.bind(_assertThisInitialized(_this));
    _this.setLanguages = _this.setLanguages.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ReactFlagsSelect.prototype;

  _proto.toggleOptions = function toggleOptions() {
    !this.state.disabled && this.setState({
      openOptions: !this.state.openOptions
    });
  };

  _proto.toggleOptionsWithKeyboard = function toggleOptionsWithKeyboard(evt) {
    evt.preventDefault();

    if (evt.keyCode === 27) {
      //esc key: hide options
      !this.state.disabled && this.setState({
        openOptions: false
      });
    }
  };

  _proto.closeOptions = function closeOptions(event) {
    if (event.target !== this.refs.selectedFlag && event.target !== this.refs.flagOptions && event.target !== this.refs.filterText) {
      this.setState({
        openOptions: false
      });
    }
  };

  _proto.onSelect = function onSelect(languageCode) {
    this.setState({
      selected: languageCode,
      filter: '',
      openOptions: false
    });
    this.props.onSelect && this.props.onSelect(languageCode);
  };

  _proto.onSelectWithKeyboard = function onSelectWithKeyboard(evt, languageCode) {
    evt.preventDefault();

    if (evt.keyCode === 13) {
      //enter key: select
      this.onSelect(languageCode);
      this.closeOptions(evt);
    } else if (evt.keyCode === 27) {
      //esc key: hide options
      this.toggleOptions();
    }
  };

  _proto.updateSelected = function updateSelected(languageCode) {
    var isValid = languages[languageCode];
    isValid && this.setState({
      selected: languageCode
    });
  };

  _proto.filterSearch = function filterSearch(evt) {
    var _this2 = this;

    var filterValue = evt.target.value;
    var filteredLanguages = filterValue && this.state.languages.filter(function (key) {
      var label = _this2.props.customLabels[key] || languages[key];
      return label && label.match(new RegExp(filterValue, 'i'));
    });
    this.setState({
      filter: filterValue,
      filteredLanguages: filteredLanguages
    });
  };

  _proto.setLanguages = function setLanguages() {
    var _this3 = this;

    var fullLanguages = Object.keys(languages);
    var selectLanguages = this.props.languages && this.props.languages.filter(function (language) {
      return languages[language];
    }); //Filter BlackList

    if (this.props.blackList && selectLanguages) {
      selectLanguages = fullLanguages.filter(function (languageKey) {
        return selectLanguages.filter(function (language) {
          return languageKey === language;
        }).length === 0;
      });
    }

    this.setState({
      languages: selectLanguages || fullLanguages
    }, function () {
      var selected = _this3.state.selected;

      if (selected && !_this3.state.languages.includes(selected)) {
        _this3.setState({
          selected: null
        });
      }
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    this.setLanguages();
    !this.props.disabled && window.addEventListener("click", this.closeOptions);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.languages !== this.props.languages || prevProps.blackList !== this.props.blackList) {
      this.setLanguages();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    !this.props.disabled && window.removeEventListener("click", this.closeOptions);
  };

  _proto.render = function render() {
    var _this4 = this;

    var isSelected = this.state.selected || this.state.defaultLanguage;
    var selectedSize = this.props.selectedSize;
    var optionsSize = this.props.optionsSize;
    var alignClass = this.props.alignOptions.toLowerCase() === 'left' ? 'to--left' : '';
    return /*#__PURE__*/React.createElement("div", {
      className: "flag-select " + (this.props.className ? this.props.className : ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      ref: "selectedFlag",
      style: {
        fontSize: selectedSize + "px"
      },
      className: "flag-select__btn",
      onClick: this.toggleOptions,
      onKeyUp: function onKeyUp(evt) {
        return _this4.toggleOptionsWithKeyboard(evt);
      },
      disabled: this.props.disabled,
      id: "select_flag_button",
      "aria-haspopup": "listbox",
      "aria-expanded": this.state.openOptions,
      "aria-labelledby": "select_flag_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 5
      }
    }, isSelected && /*#__PURE__*/React.createElement("span", {
      className: "flag-select__option flag-select__option--placeholder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 7
      }
    }, !this.props.showSelectedLabel && /*#__PURE__*/React.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 10
      }
    }, this.props.names == 'international' ? languagesX[isSelected].name : this.props.names == 'local' ? languagesX[isSelected].localName : languagesX[isSelected].name), this.props.showSelectedLabel && /*#__PURE__*/React.createElement("span", {
      className: "flag-select__option__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, this.props.customLabels[isSelected] || (this.props.names == 'international' ? languagesX[isSelected].name : this.props.names == 'local' ? languagesX[isSelected].localName : languagesX[isSelected].name))), !isSelected && /*#__PURE__*/React.createElement("span", {
      className: "flag-select__option flag-select__option--placeholder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 7
      }
    }, this.props.placeholder)), this.state.openOptions && /*#__PURE__*/React.createElement("ul", {
      tabIndex: "-1",
      role: "listbox",
      ref: "flagOptions",
      style: {
        display: 'block',
        textAlign: 'left',
        listStyleType: 'none',
        fontSize: optionsSize + "px"
      },
      className: "flag-select__options " + alignClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 6
      }
    }, this.props.searchable && /*#__PURE__*/React.createElement("div", {
      className: "filterBox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: this.props.searchPlaceholder,
      ref: "filterText",
      onChange: this.filterSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    })), (this.state.filter ? this.state.filteredLanguages : this.state.languages).map(function (languageCode) {
      return /*#__PURE__*/React.createElement("li", {
        key: languageCode,
        role: "option",
        tabIndex: "0",
        id: "select_flag_" + languageCode,
        className: "flag-select__option " + (_this4.props.showOptionLabel ? 'has-label' : ''),
        onClick: function onClick() {
          return _this4.onSelect(languageCode);
        },
        onKeyUp: function onKeyUp(evt) {
          return _this4.onSelectWithKeyboard(evt, languageCode);
        },
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: optionsSize + "px",
          height: optionsSize + "px"
        },
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 9
        }
      }, !_this4.props.showOptionLabel && /*#__PURE__*/React.createElement("span", {
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 12
        }
      }, /*#__PURE__*/React.createElement("i", {
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 18
        }
      }, _this4.props.names == 'international' ? languagesX[languageCode].name : _this4.props.names == 'local' ? languagesX[languageCode].localName : _this4.props.names == 'both' ? languagesX[languageCode].name + ' ' + languagesX[languageCode].localName : languagesX[isSelected].name)), _this4.props.showOptionLabel && /*#__PURE__*/React.createElement("span", {
        className: "flag-select__option__label",
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }
      }, _this4.props.customLabels[languageCode] || ( //languages[languageCode]
      _this4.props.names == 'international' ? languagesX[languageCode].name : _this4.props.names == 'local' ? languagesX[languageCode].localName : _this4.props.names == 'both' ? languagesX[languageCode].name + ' ' + languagesX[languageCode].localName : languagesX[languageCode].name))));
    })));
  };

  return ReactFlagsSelect;
}(Component);

ReactFlagsSelect.defaultProps = {
  selectedSize: 16,
  optionsSize: 14,
  placeholder: "Select a language",
  showSelectedLabel: true,
  showOptionLabel: true,
  alignOptions: "right",
  customLabels: {},
  disabled: false,
  blackList: false,
  searchable: false,
  searchPlaceholder: 'Search',
  names: 'local'
};
ReactFlagsSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  languages: PropTypes.array,
  blackList: PropTypes.bool,
  customLabels: PropTypes.object,
  selectedSize: PropTypes.number,
  optionsSize: PropTypes.number,
  defaultLanguage: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  showSelectedLabel: PropTypes.bool,
  showOptionLabel: PropTypes.bool,
  alignOptions: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  names: PropTypes.oneOf(['local', 'international', 'both'])
} : {};
export default ReactFlagsSelect;
