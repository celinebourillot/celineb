module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Button(props) {
  var link = props.link,
      label = props.label,
      type = props.type,
      post_type = props.post_type,
      slug = props.slug,
      customClass = props.customClass;
  if (label && link) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link,
    as: "/".concat(post_type, "/").concat(slug)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button is-rounded ".concat(customClass),
    target: type === "External" ? "_blank" : ""
  }, label));
  return '';
}
Button.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  customClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Celine B. 2019")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_styles_style_scss__WEBPACK_IMPORTED_MODULE_9__);











var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Ubuntu:700|Muli:400,800",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_9___default.a
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Celine B")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu.js */ "./components/Menu.js");










var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        favicon: this.props.options.favicon_png.length > 0 ? this.props.options.favicon_png : ''
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        menu: this.props.headerMenu,
        logo: this.props.options.main_logo,
        cta: this.props.options.header_call_to_action
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button.js */ "./components/Button.js");










var Menu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu, _Component);

  function Menu() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Menu).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "getSlug",
    value: function getSlug(url) {
      var parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var menuItems = this.props.menu.items.map(function (item, index) {
        if (item.object === "custom") {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: item.url,
            key: item.ID
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            className: "navbar-item"
          }, item.title));
        }

        var slug = _this.getSlug(item.url);

        var actualPage = item.object === "category" ? "category" : "post";
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          as: "/".concat(item.object, "/").concat(slug),
          href: "/".concat(actualPage, "?slug=").concat(slug, "&post_type=").concat(item.object),
          key: item.ID
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "navbar-item"
        }, item.title));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navbar",
        role: "navigation",
        "aria-label": "main navigation"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.logo
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        role: "button",
        className: "navbar-burger burger",
        "aria-label": "menu",
        "aria-expanded": "false",
        "data-target": "navbarBasicExample"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "navbarBasicExample",
        className: "navbar-menu"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar-end"
      }, menuItems, this.props.cta && this.props.cta.button_label && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        slug: this.props.cta.page_link[0].post_name,
        label: this.props.cta.button_label,
        post_type: this.props.cta.page_link[0].post_type,
        link: "/".concat(this.props.cta.page_link[0].post_type, "?slug=").concat(this.props.cta.page_link[0].post_name),
        type: this.props.cta.link_type,
        customClass: 'is-primary'
      })))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/PageWrapper.js":
/*!***********************************!*\
  !*** ./components/PageWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config.js */ "./config.js");











var PageWrapper = function PageWrapper(Comp) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, _React$Component);

      function _class() {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _class);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_class).apply(this, arguments));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Comp, this.props);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(args) {
            var endpoint, headerMenuRes, headerMenu, optionsEndpoint, optionsRes, options;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    endpoint = "".concat(_config_js__WEBPACK_IMPORTED_MODULE_9__["Config"].apiUrl, "/menus/v1/menus/header-menu");

                    if (typeof window !== 'undefined') {
                      endpoint = "https://cors-anywhere.herokuapp.com/".concat(endpoint);
                    }

                    _context.next = 4;
                    return fetch("".concat(_config_js__WEBPACK_IMPORTED_MODULE_9__["Config"].apiUrl, "/menus/v1/menus/header-menu"));

                  case 4:
                    headerMenuRes = _context.sent;
                    _context.next = 7;
                    return headerMenuRes.json();

                  case 7:
                    headerMenu = _context.sent;
                    optionsEndpoint = "".concat(_config_js__WEBPACK_IMPORTED_MODULE_9__["Config"].apiUrl, "/acf/v3/options/headless-settings");

                    if (typeof window !== 'undefined') {
                      optionsEndpoint = "https://cors-anywhere.herokuapp.com/".concat(endpoint);
                    }

                    _context.next = 12;
                    return fetch("".concat(_config_js__WEBPACK_IMPORTED_MODULE_9__["Config"].apiUrl, "/acf/v3/options/headless-settings"));

                  case 12:
                    optionsRes = _context.sent;
                    _context.next = 15;
                    return optionsRes.json();

                  case 15:
                    options = _context.sent;
                    _context.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
                    _context.t1 = {
                      headerMenu: headerMenu,
                      options: options
                    };

                    if (!Comp.getInitialProps) {
                      _context.next = 24;
                      break;
                    }

                    _context.next = 21;
                    return Comp.getInitialProps(args);

                  case 21:
                    _context.t2 = _context.sent;
                    _context.next = 25;
                    break;

                  case 24:
                    _context.t2 = null;

                  case 25:
                    _context.t3 = _context.t2;
                    return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t3));

                  case 27:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./components/slices/CTASlice.js":
/*!***************************************!*\
  !*** ./components/slices/CTASlice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button.js */ "./components/Button.js");









var CTASlice =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CTASlice, _React$Component);

  function CTASlice() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CTASlice);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CTASlice).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CTASlice, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          title = _this$props$data.title,
          button_label = _this$props$data.button_label,
          link_url = _this$props$data.link_url,
          link_type = _this$props$data.link_type,
          select_page = _this$props$data.select_page,
          quote = _this$props$data.quote;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "section cta-block"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, title && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "title"), quote && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, quote), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: button_label,
        link: link_type === 'Internal' ? "/".concat(select_page[0].post_type, "?slug=").concat(select_page[0].post_name) : link_url,
        type: link_type,
        customClass: 'is-primary is-yellow'
      })));
    }
  }]);

  return CTASlice;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CTASlice.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (CTASlice);

/***/ }),

/***/ "./components/slices/ContentSlice.js":
/*!*******************************************!*\
  !*** ./components/slices/ContentSlice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentSlice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/dynamic */ "next-server/dynamic");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button.js */ "./components/Button.js");



var Highlight = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-highlight */ "react-highlight", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-highlight */ "react-highlight")];
    },
    modules: ['react-highlight']
  }
});

function ContentSlice(props) {
  var content = props.data.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "content_block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, content && content.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      key: index
    }, column.content_type === "Image" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: column.image,
      alt: column.title
    })), column.content_type === "Code" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Highlight, {
      className: column.language
    }, column.code)), column.content_type === "Text" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, column.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: column.text
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: column.button_label,
      link: column.link_type === 'Internal' && column.select_page ? "/".concat(column.select_page[0].post_type, "?slug=").concat(column.select_page[0].post_name) : column.link_url,
      type: column.link_type,
      customClass: 'is-primary is-yellow'
    })), column.content_type === "Video" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "videoWrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/".concat(column.video_iframe),
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    })));
  }))));
}
ContentSlice.propTypes = {};

/***/ }),

/***/ "./components/slices/HeroSlice.js":
/*!****************************************!*\
  !*** ./components/slices/HeroSlice.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroSlice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button.js */ "./components/Button.js");



function HeroSlice(props) {
  var _props$data = props.data,
      title = _props$data.title,
      content = _props$data.content,
      background_colour = _props$data.background_colour,
      banner_height = _props$data.banner_height,
      content_alignment = _props$data.content_alignment,
      button_label = _props$data.button_label,
      link_url = _props$data.link_url,
      link_type = _props$data.link_type,
      select_page = _props$data.select_page,
      background_type = _props$data.background_type,
      bg_picture = _props$data.bg_picture;
  var styleBackground = {};
  var styleText = '';
  background_type === 'image' && (styleBackground = {
    backgroundImage: "url(".concat(bg_picture, ")"),
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });
  background_type === 'image' && (styleText = 'has-text-white');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-relative ".concat(banner_height, " ").concat(background_colour),
    style: styleBackground
  }, background_type === 'image' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-overlay is-overlay--dark"
  }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container ".concat(content_alignment, " ").concat(styleText)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: button_label,
    link: link_type === 'Internal' && select_page ? "/".concat(select_page[0].post_type, "?slug=").concat(select_page[0].post_name) : link_url,
    type: link_type,
    customClass: 'is-primary'
  }))));
}
HeroSlice.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  background_colour: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  banner_height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content_alignment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  button_label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  link_url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  link_type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  select_page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  background_type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bg_picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/slices/LogoSlice.js":
/*!****************************************!*\
  !*** ./components/slices/LogoSlice.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoSlice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button.js */ "./components/Button.js");



function LogoSlice(props) {
  var _props$data = props.data,
      title = _props$data.title,
      subtitle = _props$data.subtitle,
      intro = _props$data.intro,
      logos = _props$data.logos;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section logos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), subtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, subtitle), intro && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "small-text"
  }, intro), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, logos && logos.map(function (logo, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo"
    }, logo.logo_link ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: logo.logo
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: logo.logo
    })));
  }))));
}
LogoSlice.propTypes = {};

/***/ }),

/***/ "./components/slices/RelatedContentSlice.js":
/*!**************************************************!*\
  !*** ./components/slices/RelatedContentSlice.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentSlice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);




function ContentSlice(props) {
  var _props$data = props.data,
      title = _props$data.title,
      content = _props$data.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section related_content_block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, content && content.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, column.acf.featured_image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-image"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: column.acf.featured_image.sizes.thumbnail,
      alt: "Placeholder image"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, column.post_title), column.acf.intro && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, column.acf.intro), column.post_type === "post" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
      format: "DD/MM/YYYY"
    }, column.post_date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post?slug=".concat(column.post_name, "&post_type=").concat(column.post_type)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button is-primary"
    }, "Read more")))));
  }))));
}
ContentSlice.propTypes = {};

/***/ }),

/***/ "./components/slices/TestimonialsSlice.js":
/*!************************************************!*\
  !*** ./components/slices/TestimonialsSlice.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialsSlice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);

 //import _ from "lodash";



function TestimonialsSlice(props) {
  var _props$data = props.data,
      title = _props$data.title,
      testimonials = _props$data.testimonials;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        infinite: false
      }
    }, {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        infinite: false
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: false,
        dots: false
      }
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "testimonials-carousel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "testimonials"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, settings, testimonials.map(function (testimonial, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      className: "media"
    }, testimonial.acf.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: "image is-64x64"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: testimonial.acf.image.sizes.thumbnail,
      alt: "Image"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, testimonial.acf.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), testimonial.acf.testimonial)))));
  }))))));
}
;
TestimonialsSlice.propTypes = {
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    testimonial: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};

/***/ }),

/***/ "./components/slices/USPSlice.js":
/*!***************************************!*\
  !*** ./components/slices/USPSlice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return USPSlice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button.js */ "./components/Button.js");



function USPSlice(props) {
  var _props$data = props.data,
      title = _props$data.title,
      subtitle = _props$data.subtitle,
      columns = _props$data.columns;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section usps"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), subtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, columns && columns.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "usp"
    }, column.usp_picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "usp_icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: column.usp_picture.sizes.thumbnail,
      alt: column.usp_picture.title
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "usp_content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, column.subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "small-text",
      dangerouslySetInnerHTML: {
        __html: column.content
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: column.button_label,
      link: column.link_type === 'Internal' ? column.select_page : column.link_url,
      type: column.link_type,
      customClass: 'is-primary is-yellow'
    }))));
  }))));
}
USPSlice.propTypes = {};

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = {
  apiUrl: 'https://app.cosmosdigital.co.uk/celineb/wp-json'
};

/***/ }),

/***/ "./helpers/SliceComponentsHelpers.js":
/*!*******************************************!*\
  !*** ./helpers/SliceComponentsHelpers.js ***!
  \*******************************************/
/*! exports provided: sliceComponentsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceComponentsHelper", function() { return sliceComponentsHelper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/dynamic */ "next-server/dynamic");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slices_HeroSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/slices/HeroSlice */ "./components/slices/HeroSlice.js");
/* harmony import */ var _components_slices_USPSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/slices/USPSlice */ "./components/slices/USPSlice.js");
/* harmony import */ var _components_slices_LogoSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/slices/LogoSlice */ "./components/slices/LogoSlice.js");
/* harmony import */ var _components_slices_CTASlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/slices/CTASlice */ "./components/slices/CTASlice.js");
/* harmony import */ var _components_slices_ContentSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/slices/ContentSlice */ "./components/slices/ContentSlice.js");
/* harmony import */ var _components_slices_RelatedContentSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/slices/RelatedContentSlice */ "./components/slices/RelatedContentSlice.js");
/* harmony import */ var _components_slices_TestimonialsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/slices/TestimonialsSlice */ "./components/slices/TestimonialsSlice.js");









var sliceComponentsHelper = function sliceComponentsHelper(slices) {
  var componentsToDisplay = [];
  componentsToDisplay = !slices || !slices.length ? null : slices.map(function (slice, index) {
    if (slice === null || !slice.acf_fc_layout) return '';
    if (slice.acf_fc_layout === 'hero_cta_module') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_HeroSlice__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      data: slice
    });
    if (slice.acf_fc_layout === 'usp_module') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_USPSlice__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      data: slice
    });
    if (slice.acf_fc_layout === 'logo_module') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_LogoSlice__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      data: slice
    });
    if (slice.acf_fc_layout === 'cta_block') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_CTASlice__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      data: slice
    });
    if (slice.acf_fc_layout === 'content_block') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_ContentSlice__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      data: slice
    });
    if (slice.acf_fc_layout === 'testimonials_module') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_TestimonialsSlice__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      data: slice
    });
    if (slice.acf_fc_layout === 'related_content') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slices_RelatedContentSlice__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      data: slice
    });
  });
  return componentsToDisplay;
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? url_1.format(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? url_1.format(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PageWrapper.js */ "./components/PageWrapper.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _helpers_SliceComponentsHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/SliceComponentsHelpers */ "./helpers/SliceComponentsHelpers.js");















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        headerMenu: this.props.headerMenu,
        options: this.props.options.acf
      }, Object(_helpers_SliceComponentsHelpers__WEBPACK_IMPORTED_MODULE_13__["sliceComponentsHelper"])(this.props.page.acf.flexible_content));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var pageRes, page;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("".concat(_config_js__WEBPACK_IMPORTED_MODULE_12__["Config"].apiUrl, "/postlight/v1/page?slug=sample-page"));

              case 2:
                pageRes = _context.sent;
                _context.next = 5;
                return pageRes.json();

              case 5:
                page = _context.sent;
                return _context.abrupt("return", {
                  page: page
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Index));

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! bulma.io v0.7.4 | MIT License | github.com/jgthms/bulma */\n@-webkit-keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n@keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n.delete, .modal-close, .is-unselectable, .button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  width: 0.625em;\n}\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .list:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.delete, .modal-close {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n          transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.delete::before, .modal-close::before {\n  height: 2px;\n  width: 50%;\n}\n.delete::after, .modal-close::after {\n  height: 50%;\n  width: 2px;\n}\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n.delete:active, .modal-close:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n.is-small.delete, .is-small.modal-close {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n.is-medium.delete, .is-medium.modal-close {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n.is-large.delete, .is-large.modal-close {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n.button.is-loading::after, .select.is-loading::after, .control.is-loading::after, .loader {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n.is-overlay, .image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .modal, .modal-background, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.button, .input,\n.textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n.button:focus, .input:focus,\n.textarea:focus, .select select:focus, .file-cta:focus,\n.file-name:focus, .pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .is-focused.button, .is-focused.input,\n.is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n.is-focused.file-name, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .button:active, .input:active,\n.textarea:active, .select select:active, .file-cta:active,\n.file-name:active, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .is-active.button, .is-active.input,\n.is-active.textarea, .select select.is-active, .is-active.file-cta,\n.is-active.file-name, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis {\n  outline: none;\n}\n.button[disabled], .input[disabled],\n.textarea[disabled], .select select[disabled], .file-cta[disabled],\n.file-name[disabled], .pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled],\n.pagination-ellipsis[disabled],\nfieldset[disabled] .button,\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select,\nfieldset[disabled] .file-cta,\nfieldset[disabled] .file-name,\nfieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis {\n  cursor: not-allowed;\n}\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nul {\n  list-style: none;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*, *::before, *::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\nimg,\nembed,\niframe,\nobject,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\naudio {\n  max-width: 100%;\n}\niframe {\n  border: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\nbody {\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n  color: currentColor;\n}\na:hover {\n  color: #363636;\n}\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\nimg {\n  height: auto;\n  max-width: 100%;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\nsmall {\n  font-size: 0.875em;\n}\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\nfieldset {\n  border: none;\n}\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\ntable td,\ntable th {\n  text-align: left;\n  vertical-align: top;\n}\ntable th {\n  color: #363636;\n}\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n.is-pulled-left {\n  float: left !important;\n}\n.is-pulled-right {\n  float: right !important;\n}\n.is-clipped {\n  overflow: hidden !important;\n}\n.is-size-1 {\n  font-size: 3rem !important;\n}\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n.is-size-3 {\n  font-size: 2rem !important;\n}\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n.is-size-6 {\n  font-size: 1rem !important;\n}\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n.has-text-centered {\n  text-align: center !important;\n}\n.has-text-justified {\n  text-align: justify !important;\n}\n.has-text-left {\n  text-align: left !important;\n}\n.has-text-right {\n  text-align: right !important;\n}\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n.is-italic {\n  font-style: italic !important;\n}\n.has-text-white {\n  color: white !important;\n}\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n.has-background-white {\n  background-color: white !important;\n}\n.has-text-black {\n  color: #0a0a0a !important;\n}\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n.has-text-light {\n  color: whitesmoke !important;\n}\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n.has-text-dark {\n  color: #363636 !important;\n}\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n.has-background-dark {\n  background-color: #363636 !important;\n}\n.has-text-primary {\n  color: #00d1b2 !important;\n}\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important;\n}\n.has-background-primary {\n  background-color: #00d1b2 !important;\n}\n.has-text-link {\n  color: #3273dc !important;\n}\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important;\n}\n.has-background-link {\n  background-color: #3273dc !important;\n}\n.has-text-info {\n  color: #209cee !important;\n}\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important;\n}\n.has-background-info {\n  background-color: #209cee !important;\n}\n.has-text-success {\n  color: #23d160 !important;\n}\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important;\n}\n.has-background-success {\n  background-color: #23d160 !important;\n}\n.has-text-warning {\n  color: #ffdd57 !important;\n}\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important;\n}\n.has-background-warning {\n  background-color: #ffdd57 !important;\n}\n.has-text-danger {\n  color: #ff3860 !important;\n}\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important;\n}\n.has-background-danger {\n  background-color: #ff3860 !important;\n}\n.has-text-black-bis {\n  color: #121212 !important;\n}\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n.has-text-black-ter {\n  color: #242424 !important;\n}\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n.is-family-monospace {\n  font-family: monospace !important;\n}\n.is-family-code {\n  font-family: monospace !important;\n}\n.is-block {\n  display: block !important;\n}\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n.is-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-flex-tablet-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-flex-touch {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-flex-desktop {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-flex-desktop-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-flex-widescreen {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-flex-widescreen-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-flex-fullhd {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n.is-inline {\n  display: inline !important;\n}\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n.is-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-inline-flex-tablet-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-inline-flex-touch {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-inline-flex-desktop {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-inline-flex-desktop-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-inline-flex-widescreen {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-inline-flex-widescreen-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-inline-flex-fullhd {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n.is-hidden {\n  display: none !important;\n}\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n.is-marginless {\n  margin: 0 !important;\n}\n.is-paddingless {\n  padding: 0 !important;\n}\n.is-radiusless {\n  border-radius: 0 !important;\n}\n.is-shadowless {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.box {\n  background-color: white;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\na.box:hover, a.box:focus {\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n}\na.box:active {\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n}\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  padding-top: calc(0.375em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n.button strong {\n  color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.375em - 1px);\n  margin-right: 0.1875em;\n}\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: calc(-0.375em - 1px);\n}\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.375em - 1px);\n  margin-right: calc(-0.375em - 1px);\n}\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.button:focus, .button.is-focused {\n  border-color: #3273dc;\n  color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.button.is-text[disabled],\nfieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white[disabled],\nfieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted:hover {\n  background-color: black;\n}\n.button.is-white.is-inverted[disabled],\nfieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n}\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined:focus {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black[disabled],\nfieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover {\n  background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled],\nfieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined:focus {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n}\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: #363636;\n}\n.button.is-light[disabled],\nfieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-light.is-inverted {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted:hover {\n  background-color: #292929;\n}\n.button.is-light.is-inverted[disabled],\nfieldset[disabled] .button.is-light.is-inverted {\n  background-color: #363636;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: #363636;\n}\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined:focus {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #363636;\n}\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.button.is-dark[disabled],\nfieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-dark.is-inverted {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-dark.is-inverted:hover {\n  background-color: #e8e8e8;\n}\n.button.is-dark.is-inverted[disabled],\nfieldset[disabled] .button.is-dark.is-inverted {\n  background-color: whitesmoke;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {\n  background-color: #363636;\n  border-color: #363636;\n  color: whitesmoke;\n}\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined:focus {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary[disabled],\nfieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted:hover {\n  background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled],\nfieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #00d1b2;\n}\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n.button.is-primary.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus {\n  background-color: #fff;\n  color: #00d1b2;\n}\n.button.is-primary.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link[disabled],\nfieldset[disabled] .button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #3273dc;\n}\n.button.is-link.is-inverted:hover {\n  background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled],\nfieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #3273dc;\n}\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  color: #3273dc;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined:focus {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n.button.is-link.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined:focus {\n  background-color: #fff;\n  color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-info {\n  background-color: #209cee;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #1496ed;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #118fe4;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info[disabled],\nfieldset[disabled] .button.is-info {\n  background-color: #209cee;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #209cee;\n}\n.button.is-info.is-inverted:hover {\n  background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled],\nfieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #209cee;\n}\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #209cee;\n  color: #209cee;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {\n  background-color: #209cee;\n  border-color: #209cee;\n  color: #fff;\n}\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #209cee #209cee !important;\n}\n.button.is-info.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #209cee;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined:focus {\n  background-color: #fff;\n  color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-success {\n  background-color: #23d160;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #22c65b;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #20bc56;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success[disabled],\nfieldset[disabled] .button.is-success {\n  background-color: #23d160;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #23d160;\n}\n.button.is-success.is-inverted:hover {\n  background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled],\nfieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #23d160;\n}\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #23d160;\n  color: #23d160;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {\n  background-color: #23d160;\n  border-color: #23d160;\n  color: #fff;\n}\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #23d160 #23d160 !important;\n}\n.button.is-success.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #23d160;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined:focus {\n  background-color: #fff;\n  color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled],\nfieldset[disabled] .button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n.button.is-warning.is-inverted:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled],\nfieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #ffdd57;\n}\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  color: #ffdd57;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n.button.is-warning.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined:focus {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-danger {\n  background-color: #ff3860;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #ff2b56;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ff1f4b;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger[disabled],\nfieldset[disabled] .button.is-danger {\n  background-color: #ff3860;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #ff3860;\n}\n.button.is-danger.is-inverted:hover {\n  background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled],\nfieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #ff3860;\n}\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #ff3860;\n  color: #ff3860;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {\n  background-color: #ff3860;\n  border-color: #ff3860;\n  color: #fff;\n}\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #ff3860 #ff3860 !important;\n}\n.button.is-danger.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #ff3860;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined:focus {\n  background-color: #fff;\n  color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.button.is-normal {\n  font-size: 1rem;\n}\n.button.is-medium {\n  font-size: 1.25rem;\n}\n.button.is-large {\n  font-size: 1.5rem;\n}\n.button[disabled],\nfieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: 0.5;\n}\n.button.is-fullwidth {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em / 2));\n  top: calc(50% - (1em / 2));\n  position: absolute !important;\n}\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  pointer-events: none;\n}\n.button.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.buttons {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n.buttons.has-addons .button.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.buttons.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttons.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.container {\n  margin: 0 auto;\n  position: relative;\n}\n@media screen and (min-width: 1088px) {\n  .container {\n    max-width: 960px;\n    width: 960px;\n  }\n  .container.is-fluid {\n    margin-left: 64px;\n    margin-right: 64px;\n    max-width: none;\n    width: auto;\n  }\n}\n@media screen and (max-width: 1279px) {\n  .container.is-widescreen {\n    max-width: 1152px;\n    width: auto;\n  }\n}\n@media screen and (max-width: 1471px) {\n  .container.is-fullhd {\n    max-width: 1344px;\n    width: auto;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .container {\n    max-width: 1152px;\n    width: 1152px;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .container {\n    max-width: 1344px;\n    width: 1344px;\n  }\n}\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n.content ul ul ul {\n  list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n.content figure img {\n  display: inline-block;\n}\n.content figure figcaption {\n  font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.content table th {\n  color: #363636;\n  text-align: left;\n}\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n.input,\n.textarea {\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%;\n}\n.input::-moz-placeholder,\n.textarea::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.input::-webkit-input-placeholder,\n.textarea::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.input:-moz-placeholder,\n.textarea:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.input:-ms-input-placeholder,\n.textarea:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.input:hover, .input.is-hovered,\n.textarea:hover,\n.textarea.is-hovered {\n  border-color: #b5b5b5;\n}\n.input:focus, .input.is-focused, .input:active, .input.is-active,\n.textarea:focus,\n.textarea.is-focused,\n.textarea:active,\n.textarea.is-active {\n  border-color: #3273dc;\n  -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.input[disabled],\nfieldset[disabled] .input,\n.textarea[disabled],\nfieldset[disabled]\n.textarea {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7a7a7a;\n}\n.input[disabled]::-moz-placeholder,\nfieldset[disabled] .input::-moz-placeholder,\n.textarea[disabled]::-moz-placeholder,\nfieldset[disabled]\n.textarea::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]::-webkit-input-placeholder,\nfieldset[disabled] .input::-webkit-input-placeholder,\n.textarea[disabled]::-webkit-input-placeholder,\nfieldset[disabled]\n.textarea::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]:-moz-placeholder,\nfieldset[disabled] .input:-moz-placeholder,\n.textarea[disabled]:-moz-placeholder,\nfieldset[disabled]\n.textarea:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]:-ms-input-placeholder,\nfieldset[disabled] .input:-ms-input-placeholder,\n.textarea[disabled]:-ms-input-placeholder,\nfieldset[disabled]\n.textarea:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.input[readonly],\n.textarea[readonly] {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.input.is-white,\n.textarea.is-white {\n  border-color: white;\n}\n.input.is-white:focus, .input.is-white.is-focused, .input.is-white:active, .input.is-white.is-active,\n.textarea.is-white:focus,\n.textarea.is-white.is-focused,\n.textarea.is-white:active,\n.textarea.is-white.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.input.is-black,\n.textarea.is-black {\n  border-color: #0a0a0a;\n}\n.input.is-black:focus, .input.is-black.is-focused, .input.is-black:active, .input.is-black.is-active,\n.textarea.is-black:focus,\n.textarea.is-black.is-focused,\n.textarea.is-black:active,\n.textarea.is-black.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.input.is-light,\n.textarea.is-light {\n  border-color: whitesmoke;\n}\n.input.is-light:focus, .input.is-light.is-focused, .input.is-light:active, .input.is-light.is-active,\n.textarea.is-light:focus,\n.textarea.is-light.is-focused,\n.textarea.is-light:active,\n.textarea.is-light.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.input.is-dark,\n.textarea.is-dark {\n  border-color: #363636;\n}\n.input.is-dark:focus, .input.is-dark.is-focused, .input.is-dark:active, .input.is-dark.is-active,\n.textarea.is-dark:focus,\n.textarea.is-dark.is-focused,\n.textarea.is-dark:active,\n.textarea.is-dark.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.input.is-primary,\n.textarea.is-primary {\n  border-color: #00d1b2;\n}\n.input.is-primary:focus, .input.is-primary.is-focused, .input.is-primary:active, .input.is-primary.is-active,\n.textarea.is-primary:focus,\n.textarea.is-primary.is-focused,\n.textarea.is-primary:active,\n.textarea.is-primary.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.input.is-link,\n.textarea.is-link {\n  border-color: #3273dc;\n}\n.input.is-link:focus, .input.is-link.is-focused, .input.is-link:active, .input.is-link.is-active,\n.textarea.is-link:focus,\n.textarea.is-link.is-focused,\n.textarea.is-link:active,\n.textarea.is-link.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.input.is-info,\n.textarea.is-info {\n  border-color: #209cee;\n}\n.input.is-info:focus, .input.is-info.is-focused, .input.is-info:active, .input.is-info.is-active,\n.textarea.is-info:focus,\n.textarea.is-info.is-focused,\n.textarea.is-info:active,\n.textarea.is-info.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.input.is-success,\n.textarea.is-success {\n  border-color: #23d160;\n}\n.input.is-success:focus, .input.is-success.is-focused, .input.is-success:active, .input.is-success.is-active,\n.textarea.is-success:focus,\n.textarea.is-success.is-focused,\n.textarea.is-success:active,\n.textarea.is-success.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.input.is-warning,\n.textarea.is-warning {\n  border-color: #ffdd57;\n}\n.input.is-warning:focus, .input.is-warning.is-focused, .input.is-warning:active, .input.is-warning.is-active,\n.textarea.is-warning:focus,\n.textarea.is-warning.is-focused,\n.textarea.is-warning:active,\n.textarea.is-warning.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.input.is-danger,\n.textarea.is-danger {\n  border-color: #ff3860;\n}\n.input.is-danger:focus, .input.is-danger.is-focused, .input.is-danger:active, .input.is-danger.is-active,\n.textarea.is-danger:focus,\n.textarea.is-danger.is-focused,\n.textarea.is-danger:active,\n.textarea.is-danger.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.input.is-small,\n.textarea.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.input.is-medium,\n.textarea.is-medium {\n  font-size: 1.25rem;\n}\n.input.is-large,\n.textarea.is-large {\n  font-size: 1.5rem;\n}\n.input.is-fullwidth,\n.textarea.is-fullwidth {\n  display: block;\n  width: 100%;\n}\n.input.is-inline,\n.textarea.is-inline {\n  display: inline;\n  width: auto;\n}\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical;\n}\n.textarea:not([rows]) {\n  max-height: 600px;\n  min-height: 120px;\n}\n.textarea[rows] {\n  height: initial;\n}\n.textarea.has-fixed-size {\n  resize: none;\n}\n.checkbox,\n.radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.checkbox input,\n.radio input {\n  cursor: pointer;\n}\n.checkbox:hover,\n.radio:hover {\n  color: #363636;\n}\n.checkbox[disabled],\nfieldset[disabled] .checkbox,\n.radio[disabled],\nfieldset[disabled]\n.radio {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n.radio + .radio {\n  margin-left: 0.5em;\n}\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n  height: 2.25em;\n}\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #3273dc;\n  right: 1.125em;\n  z-index: 4;\n}\n.select.is-rounded select {\n  border-radius: 290486px;\n  padding-left: 1em;\n}\n.select select {\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n.select select::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .select select.is-hovered {\n  border-color: #b5b5b5;\n}\n.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {\n  border-color: #3273dc;\n  -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select select[disabled],\nfieldset[disabled] .select select {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder,\nfieldset[disabled] .select select::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder,\nfieldset[disabled] .select select::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder,\nfieldset[disabled] .select select:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder,\nfieldset[disabled] .select select:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select::-ms-expand {\n  display: none;\n}\n.select select[disabled]:hover,\nfieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n.select.is-white select {\n  border-color: white;\n}\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n.select.is-light select {\n  border-color: whitesmoke;\n}\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n.select.is-dark select {\n  border-color: #363636;\n}\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2;\n}\n.select.is-primary select {\n  border-color: #00d1b2;\n}\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n.select.is-link:not(:hover)::after {\n  border-color: #3273dc;\n}\n.select.is-link select {\n  border-color: #3273dc;\n}\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #2366d1;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select.is-info:not(:hover)::after {\n  border-color: #209cee;\n}\n.select.is-info select {\n  border-color: #209cee;\n}\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #118fe4;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.select.is-success:not(:hover)::after {\n  border-color: #23d160;\n}\n.select.is-success select {\n  border-color: #23d160;\n}\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #20bc56;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.select.is-warning:not(:hover)::after {\n  border-color: #ffdd57;\n}\n.select.is-warning select {\n  border-color: #ffdd57;\n}\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd83d;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.select.is-danger:not(:hover)::after {\n  border-color: #ff3860;\n}\n.select.is-danger select {\n  border-color: #ff3860;\n}\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ff1f4b;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.select.is-medium {\n  font-size: 1.25rem;\n}\n.select.is-large {\n  font-size: 1.5rem;\n}\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n.select.is-fullwidth {\n  width: 100%;\n}\n.select.is-fullwidth select {\n  width: 100%;\n}\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  -webkit-transform: none;\n          transform: none;\n}\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n.file {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: #363636;\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: #363636;\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: #363636;\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: #363636;\n}\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: whitesmoke;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: whitesmoke;\n}\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n          box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link .file-cta {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n          box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n  color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info .file-cta {\n  background-color: #209cee;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #1496ed;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n          box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n  color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #118fe4;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success .file-cta {\n  background-color: #23d160;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #22c65b;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n          box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n  color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #20bc56;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-warning .file-cta {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n          box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n  background-color: #ff3860;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #ff2b56;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n          box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n  color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ff1f4b;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-small {\n  font-size: 0.75rem;\n}\n.file.is-medium {\n  font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-large {\n  font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n.file.is-boxed .file-label {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.file.is-boxed .file-cta {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n.file.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n.file.is-fullwidth .file-name {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: none;\n}\n.file.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1;\n}\n.file-label {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n.file-icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n  font-size: 14px;\n}\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n.label.is-small {\n  font-size: 0.75rem;\n}\n.label.is-medium {\n  font-size: 1.25rem;\n}\n.label.is-large {\n  font-size: 1.5rem;\n}\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n  color: white;\n}\n.help.is-black {\n  color: #0a0a0a;\n}\n.help.is-light {\n  color: whitesmoke;\n}\n.help.is-dark {\n  color: #363636;\n}\n.help.is-primary {\n  color: #00d1b2;\n}\n.help.is-link {\n  color: #3273dc;\n}\n.help.is-info {\n  color: #209cee;\n}\n.help.is-success {\n  color: #23d160;\n}\n.help.is-warning {\n  color: #ffdd57;\n}\n.help.is-danger {\n  color: #ff3860;\n}\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.field.has-addons.has-addons-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.field.has-addons.has-addons-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.field.is-grouped {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.field.is-grouped > .control {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .field-label {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 5;\n        -ms-flex-positive: 5;\n            flex-grow: 5;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n.control {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: left;\n}\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #7a7a7a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.25em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.25em;\n  z-index: 4;\n}\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.25em;\n}\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.25em;\n}\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n.icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.image img.is-rounded {\n  border-radius: 290486px;\n}\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n.image.is-5by4 {\n  padding-top: 80%;\n}\n.image.is-4by3 {\n  padding-top: 75%;\n}\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n.image.is-5by3 {\n  padding-top: 60%;\n}\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n.image.is-2by1 {\n  padding-top: 50%;\n}\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n.image.is-4by5 {\n  padding-top: 125%;\n}\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n.image.is-2by3 {\n  padding-top: 150%;\n}\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n.image.is-1by2 {\n  padding-top: 200%;\n}\n.image.is-1by3 {\n  padding-top: 300%;\n}\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative;\n}\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.notification strong {\n  color: currentColor;\n}\n.notification code,\n.notification pre {\n  background: white;\n}\n.notification pre code {\n  background: transparent;\n}\n.notification > .delete {\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n}\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.notification.is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.notification.is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.notification.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.notification.is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.notification.is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.notification.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress::-webkit-progress-bar {\n  background-color: #dbdbdb;\n}\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n.progress:indeterminate {\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: moveIndeterminate;\n          animation-name: moveIndeterminate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background-color: #dbdbdb;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #4a4a4a), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #4a4a4a 30%, #dbdbdb 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n.progress.is-white::-webkit-progress-value {\n  background-color: white;\n}\n.progress.is-white::-moz-progress-bar {\n  background-color: white;\n}\n.progress.is-white::-ms-fill {\n  background-color: white;\n}\n.progress.is-white:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, white), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, white 30%, #dbdbdb 30%);\n}\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a;\n}\n.progress.is-black:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #0a0a0a), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #0a0a0a 30%, #dbdbdb 30%);\n}\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke;\n}\n.progress.is-light:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, whitesmoke), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, whitesmoke 30%, #dbdbdb 30%);\n}\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636;\n}\n.progress.is-dark::-ms-fill {\n  background-color: #363636;\n}\n.progress.is-dark:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #363636), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #363636 30%, #dbdbdb 30%);\n}\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2;\n}\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2;\n}\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2;\n}\n.progress.is-primary:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #00d1b2), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #00d1b2 30%, #dbdbdb 30%);\n}\n.progress.is-link::-webkit-progress-value {\n  background-color: #3273dc;\n}\n.progress.is-link::-moz-progress-bar {\n  background-color: #3273dc;\n}\n.progress.is-link::-ms-fill {\n  background-color: #3273dc;\n}\n.progress.is-link:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #3273dc), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #3273dc 30%, #dbdbdb 30%);\n}\n.progress.is-info::-webkit-progress-value {\n  background-color: #209cee;\n}\n.progress.is-info::-moz-progress-bar {\n  background-color: #209cee;\n}\n.progress.is-info::-ms-fill {\n  background-color: #209cee;\n}\n.progress.is-info:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #209cee), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #209cee 30%, #dbdbdb 30%);\n}\n.progress.is-success::-webkit-progress-value {\n  background-color: #23d160;\n}\n.progress.is-success::-moz-progress-bar {\n  background-color: #23d160;\n}\n.progress.is-success::-ms-fill {\n  background-color: #23d160;\n}\n.progress.is-success:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #23d160), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #23d160 30%, #dbdbdb 30%);\n}\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffdd57;\n}\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffdd57;\n}\n.progress.is-warning::-ms-fill {\n  background-color: #ffdd57;\n}\n.progress.is-warning:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #ffdd57), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #ffdd57 30%, #dbdbdb 30%);\n}\n.progress.is-danger::-webkit-progress-value {\n  background-color: #ff3860;\n}\n.progress.is-danger::-moz-progress-bar {\n  background-color: #ff3860;\n}\n.progress.is-danger::-ms-fill {\n  background-color: #ff3860;\n}\n.progress.is-danger:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #ff3860), color-stop(30%, #dbdbdb));\n  background-image: linear-gradient(to right, #ff3860 30%, #dbdbdb 30%);\n}\n.progress.is-small {\n  height: 0.75rem;\n}\n.progress.is-medium {\n  height: 1.25rem;\n}\n.progress.is-large {\n  height: 1.5rem;\n}\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.table {\n  background-color: white;\n  color: #363636;\n}\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: #363636;\n}\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: whitesmoke;\n}\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n.table td.is-link,\n.table th.is-link {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.table td.is-info,\n.table th.is-info {\n  background-color: #209cee;\n  border-color: #209cee;\n  color: #fff;\n}\n.table td.is-success,\n.table th.is-success {\n  background-color: #23d160;\n  border-color: #23d160;\n  color: #fff;\n}\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #ff3860;\n  border-color: #ff3860;\n  color: #fff;\n}\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n.table th {\n  color: #363636;\n  text-align: left;\n}\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n.table thead {\n  background-color: transparent;\n}\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.table tfoot {\n  background-color: transparent;\n}\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.table tbody {\n  background-color: transparent;\n}\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n  width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n.tags {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.tags.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n.tags.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.tag:not(body) {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.tag:not(body).is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.tag:not(body).is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.tag:not(body).is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.tag:not(body).is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n          transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n  border-radius: 290486px;\n}\na.tag:hover {\n  text-decoration: underline;\n}\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n.title + .highlight {\n  margin-top: -0.75rem;\n}\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n.title.is-1 {\n  font-size: 3rem;\n}\n.title.is-2 {\n  font-size: 2.5rem;\n}\n.title.is-3 {\n  font-size: 2rem;\n}\n.title.is-4 {\n  font-size: 1.5rem;\n}\n.title.is-5 {\n  font-size: 1.25rem;\n}\n.title.is-6 {\n  font-size: 1rem;\n}\n.title.is-7 {\n  font-size: 0.75rem;\n}\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n.highlight pre {\n  overflow: auto;\n  max-width: 100%;\n}\n.number {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.breadcrumb a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #3273dc;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 0.75em;\n}\n.breadcrumb a:hover {\n  color: #363636;\n}\n.breadcrumb li {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"\\0002f\";\n}\n.breadcrumb ul,\n.breadcrumb ol {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"\\02192\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"\\02022\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"\\000b7\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"\\0227B\";\n}\n.card {\n  background-color: white;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n.card-header {\n  background-color: transparent;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.card-header-title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #363636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem;\n}\n.card-header-title.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card-header-icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem;\n}\n.card-image {\n  display: block;\n  position: relative;\n}\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #dbdbdb;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.card-footer-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #dbdbdb;\n}\n.card .media:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.dropdown {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: left;\n  white-space: nowrap;\n  width: 100%;\n}\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n.dropdown-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n.level {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.level code {\n  border-radius: 4px;\n}\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n.level.is-mobile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n}\n.level-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n.level-left,\n.level-right {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n  .level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n.level-left {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.level-right {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.list {\n  background-color: white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n}\n.list-item {\n  display: block;\n  padding: 0.5em 1em;\n}\n.list-item:not(a) {\n  color: #4a4a4a;\n}\n.list-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-item:last-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-item:not(:last-child) {\n  border-bottom: 1px solid #dbdbdb;\n}\n.list-item.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\na.list-item {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n.media {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n}\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.media .media .media {\n  padding-top: 0.5rem;\n}\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n.media-left,\n.media-right {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.media-left {\n  margin-right: 1rem;\n}\n.media-right {\n  margin-left: 1rem;\n}\n.media-content {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  text-align: left;\n}\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n  font-size: 0.75rem;\n}\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n.menu.is-large {\n  font-size: 1.5rem;\n}\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.menu-list a.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.message strong {\n  color: currentColor;\n}\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.message.is-small {\n  font-size: 0.75rem;\n}\n.message.is-medium {\n  font-size: 1.25rem;\n}\n.message.is-large {\n  font-size: 1.5rem;\n}\n.message.is-white {\n  background-color: white;\n}\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.message.is-white .message-body {\n  border-color: white;\n  color: #4d4d4d;\n}\n.message.is-black {\n  background-color: #fafafa;\n}\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n  color: #090909;\n}\n.message.is-light {\n  background-color: #fafafa;\n}\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.message.is-light .message-body {\n  border-color: whitesmoke;\n  color: #505050;\n}\n.message.is-dark {\n  background-color: #fafafa;\n}\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.message.is-dark .message-body {\n  border-color: #363636;\n  color: #2a2a2a;\n}\n.message.is-primary {\n  background-color: #f5fffd;\n}\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #021310;\n}\n.message.is-link {\n  background-color: #f6f9fe;\n}\n.message.is-link .message-header {\n  background-color: #3273dc;\n  color: #fff;\n}\n.message.is-link .message-body {\n  border-color: #3273dc;\n  color: #22509a;\n}\n.message.is-info {\n  background-color: #f6fbfe;\n}\n.message.is-info .message-header {\n  background-color: #209cee;\n  color: #fff;\n}\n.message.is-info .message-body {\n  border-color: #209cee;\n  color: #12537e;\n}\n.message.is-success {\n  background-color: #f6fef9;\n}\n.message.is-success .message-header {\n  background-color: #23d160;\n  color: #fff;\n}\n.message.is-success .message-body {\n  border-color: #23d160;\n  color: #0e301a;\n}\n.message.is-warning {\n  background-color: #fffdf5;\n}\n.message.is-warning .message-header {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n  border-color: #ffdd57;\n  color: #3b3108;\n}\n.message.is-danger {\n  background-color: #fff5f7;\n}\n.message.is-danger .message-header {\n  background-color: #ff3860;\n  color: #fff;\n}\n.message.is-danger .message-body {\n  border-color: #ff3860;\n  color: #cd0930;\n}\n.message-header {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 700;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n.message-header .delete {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin-left: 0.75em;\n}\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n.message-body pre code {\n  background-color: transparent;\n}\n.modal {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .modal-content,\n  .modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n.modal-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n.modal-card-head,\n.modal-card-foot {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.modal-card-title {\n  color: #363636;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 10px;\n}\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n  .navbar.is-white .navbar-start .navbar-link,\n  .navbar.is-white .navbar-end > .navbar-item,\n  .navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n  .navbar.is-white .navbar-start .navbar-link:hover,\n  .navbar.is-white .navbar-start .navbar-link.is-active,\n  .navbar.is-white .navbar-end > a.navbar-item:hover,\n  .navbar.is-white .navbar-end > a.navbar-item.is-active,\n  .navbar.is-white .navbar-end .navbar-link:hover,\n  .navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n  .navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n  .navbar.is-black .navbar-start .navbar-link,\n  .navbar.is-black .navbar-end > .navbar-item,\n  .navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n  .navbar.is-black .navbar-start .navbar-link:hover,\n  .navbar.is-black .navbar-start .navbar-link.is-active,\n  .navbar.is-black .navbar-end > a.navbar-item:hover,\n  .navbar.is-black .navbar-end > a.navbar-item.is-active,\n  .navbar.is-black .navbar-end .navbar-link:hover,\n  .navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n  .navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: #363636;\n}\n.navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: #363636;\n}\n.navbar.is-light .navbar-burger {\n  color: #363636;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n  .navbar.is-light .navbar-start .navbar-link,\n  .navbar.is-light .navbar-end > .navbar-item,\n  .navbar.is-light .navbar-end .navbar-link {\n    color: #363636;\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n  .navbar.is-light .navbar-start .navbar-link:hover,\n  .navbar.is-light .navbar-start .navbar-link.is-active,\n  .navbar.is-light .navbar-end > a.navbar-item:hover,\n  .navbar.is-light .navbar-end > a.navbar-item.is-active,\n  .navbar.is-light .navbar-end .navbar-link:hover,\n  .navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: #363636;\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n  .navbar.is-light .navbar-end .navbar-link::after {\n    border-color: #363636;\n  }\n  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: #363636;\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #363636;\n  }\n}\n.navbar.is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: whitesmoke;\n}\n.navbar.is-dark .navbar-burger {\n  color: whitesmoke;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n  .navbar.is-dark .navbar-start .navbar-link,\n  .navbar.is-dark .navbar-end > .navbar-item,\n  .navbar.is-dark .navbar-end .navbar-link {\n    color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-start .navbar-link:hover,\n  .navbar.is-dark .navbar-start .navbar-link.is-active,\n  .navbar.is-dark .navbar-end > a.navbar-item:hover,\n  .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-end .navbar-link:hover,\n  .navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n  .navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: whitesmoke;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: whitesmoke;\n  }\n}\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n  .navbar.is-primary .navbar-start .navbar-link,\n  .navbar.is-primary .navbar-end > .navbar-item,\n  .navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-start .navbar-link:hover,\n  .navbar.is-primary .navbar-start .navbar-link.is-active,\n  .navbar.is-primary .navbar-end > a.navbar-item:hover,\n  .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-end .navbar-link:hover,\n  .navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n  .navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff;\n  }\n}\n.navbar.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n  .navbar.is-link .navbar-start .navbar-link,\n  .navbar.is-link .navbar-end > .navbar-item,\n  .navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n  .navbar.is-link .navbar-start .navbar-link:hover,\n  .navbar.is-link .navbar-start .navbar-link.is-active,\n  .navbar.is-link .navbar-end > a.navbar-item:hover,\n  .navbar.is-link .navbar-end > a.navbar-item.is-active,\n  .navbar.is-link .navbar-end .navbar-link:hover,\n  .navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n  .navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3273dc;\n    color: #fff;\n  }\n}\n.navbar.is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #118fe4;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n  .navbar.is-info .navbar-start .navbar-link,\n  .navbar.is-info .navbar-end > .navbar-item,\n  .navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n  .navbar.is-info .navbar-start .navbar-link:hover,\n  .navbar.is-info .navbar-start .navbar-link.is-active,\n  .navbar.is-info .navbar-end > a.navbar-item:hover,\n  .navbar.is-info .navbar-end > a.navbar-item.is-active,\n  .navbar.is-info .navbar-end .navbar-link:hover,\n  .navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #118fe4;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n  .navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #118fe4;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #209cee;\n    color: #fff;\n  }\n}\n.navbar.is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #20bc56;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n  .navbar.is-success .navbar-start .navbar-link,\n  .navbar.is-success .navbar-end > .navbar-item,\n  .navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n  .navbar.is-success .navbar-start .navbar-link:hover,\n  .navbar.is-success .navbar-start .navbar-link.is-active,\n  .navbar.is-success .navbar-end > a.navbar-item:hover,\n  .navbar.is-success .navbar-end > a.navbar-item.is-active,\n  .navbar.is-success .navbar-end .navbar-link:hover,\n  .navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #20bc56;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n  .navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #20bc56;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #23d160;\n    color: #fff;\n  }\n}\n.navbar.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n  .navbar.is-warning .navbar-start .navbar-link,\n  .navbar.is-warning .navbar-end > .navbar-item,\n  .navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-start .navbar-link:hover,\n  .navbar.is-warning .navbar-start .navbar-link.is-active,\n  .navbar.is-warning .navbar-end > a.navbar-item:hover,\n  .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-end .navbar-link:hover,\n  .navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n  .navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ff1f4b;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1088px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n  .navbar.is-danger .navbar-start .navbar-link,\n  .navbar.is-danger .navbar-end > .navbar-item,\n  .navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-start .navbar-link:hover,\n  .navbar.is-danger .navbar-start .navbar-link.is-active,\n  .navbar.is-danger .navbar-end > a.navbar-item:hover,\n  .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-end .navbar-link:hover,\n  .navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ff1f4b;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n  .navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ff1f4b;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ff3860;\n    color: #fff;\n  }\n}\n.navbar > .container {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n.navbar.has-shadow {\n  -webkit-box-shadow: 0 2px 0 0 whitesmoke;\n          box-shadow: 0 2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n  -webkit-box-shadow: 0 -2px 0 0 whitesmoke;\n          box-shadow: 0 -2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-top {\n  top: 0;\n}\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n.navbar-brand,\n.navbar-tabs {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  min-height: 3.25rem;\n}\n.navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transition-duration: 86ms;\n          transition-duration: 86ms;\n  transition-property: background-color, opacity, -webkit-transform;\n  -webkit-transition-property: background-color, opacity, -webkit-transform;\n  transition-property: background-color, opacity, transform;\n  transition-property: background-color, opacity, transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n  -webkit-transform: translateY(5px) rotate(45deg);\n          transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n  -webkit-transform: translateY(-5px) rotate(-45deg);\n          transform: translateY(-5px) rotate(-45deg);\n}\n.navbar-menu {\n  display: none;\n}\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\na.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #3273dc;\n}\n.navbar-item {\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.navbar-item img {\n  max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n.navbar-item.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n}\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #3273dc;\n  padding-bottom: calc(0.5rem - 3px);\n}\n.navbar-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #3273dc;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n@media screen and (max-width: 1087px) {\n  .navbar > .container {\n    display: block;\n  }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .navbar-link::after {\n    display: none;\n  }\n  .navbar-menu {\n    background-color: white;\n    -webkit-box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n  html.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n  .navbar.is-spaced .navbar-end {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n  .navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n  .navbar.is-transparent .navbar-link:hover,\n  .navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar-burger {\n    display: none;\n  }\n  .navbar-item,\n  .navbar-link {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .navbar-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .navbar-item.has-dropdown {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    -webkit-transform: rotate(135deg) translate(0.25em, -0.25em);\n            transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    -webkit-box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  .navbar-menu {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n  .navbar-start {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-right: auto;\n  }\n  .navbar-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-left: auto;\n  }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    -webkit-box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    -webkit-box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n    -webkit-transition-duration: 86ms;\n            transition-duration: 86ms;\n    transition-property: opacity, -webkit-transform;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n  .navbar-divider {\n    display: block;\n  }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -.75rem;\n  }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -.75rem;\n  }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n  html.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n  a.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:hover),\n  .navbar-link.is-active:not(:hover) {\n    background-color: transparent;\n  }\n  .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 290486px;\n}\n.pagination.is-rounded .pagination-link {\n  border-radius: 290486px;\n}\n.pagination,\n.pagination-list {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0.25rem;\n  text-align: center;\n}\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.25em;\n}\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #3273dc;\n}\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n.pagination-list {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n@media screen and (max-width: 768px) {\n  .pagination {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .pagination-previous,\n  .pagination-next {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n  .pagination-list li {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination-previous {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .pagination.is-centered .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n}\n.panel {\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n}\n.panel-heading:first-child,\n.panel-tabs:first-child,\n.panel-block:first-child {\n  border-top: 1px solid #dbdbdb;\n}\n.panel-heading {\n  background-color: whitesmoke;\n  border-radius: 4px 4px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n}\n.panel-tabs {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.875em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n  color: #3273dc;\n}\n.panel-block {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #363636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=\"checkbox\"] {\n  margin-right: 0.75em;\n}\n.panel-block > .control {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  width: 100%;\n}\n.panel-block.is-wrapped {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.panel-block.is-active {\n  border-left-color: #3273dc;\n  color: #363636;\n}\n.panel-block.is-active .panel-icon {\n  color: #3273dc;\n}\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n.tabs li {\n  display: block;\n}\n.tabs li.is-active a {\n  border-bottom-color: #3273dc;\n  color: #3273dc;\n}\n.tabs ul {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n.tabs ul.is-center {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.tabs ul.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tabs.is-right ul {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n  border-radius: 4px 0 0 4px;\n}\n.tabs.is-toggle li:last-child a {\n  border-radius: 0 4px 4px 0;\n}\n.tabs.is-toggle li.is-active a {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n  z-index: 1;\n}\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 290486px;\n  border-top-left-radius: 290486px;\n  padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 290486px;\n  border-top-right-radius: 290486px;\n  padding-right: 1.25em;\n}\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n.column {\n  display: block;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.columns.is-mobile > .column.is-full {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n.columns.is-mobile > .column.is-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 8.33333%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%;\n}\n.columns.is-mobile > .column.is-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 16.66667%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%;\n}\n.columns.is-mobile > .column.is-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 33.33333%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%;\n}\n.columns.is-mobile > .column.is-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 41.66667%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%;\n}\n.columns.is-mobile > .column.is-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 58.33333%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%;\n}\n.columns.is-mobile > .column.is-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 66.66667%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%;\n}\n.columns.is-mobile > .column.is-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 83.33333%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%;\n}\n.columns.is-mobile > .column.is-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 91.66667%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%;\n}\n.columns.is-mobile > .column.is-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n  }\n  .column.is-full-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-1-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n  }\n  .column.is-full, .column.is-full-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66667%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66667%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66667%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66667%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .column.is-narrow-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n  }\n  .column.is-full-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-1-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .column.is-narrow-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n  }\n  .column.is-full-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-1-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .column.is-narrow-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n  }\n  .column.is-full-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-1-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .column.is-narrow-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n  }\n  .column.is-full-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-1-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n.columns.is-mobile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.columns.is-multiline {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.columns.is-vcentered {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-desktop {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (max-width: 1087px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1088px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1472px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n.tile {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: block;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.tile.is-child {\n  margin: 0 !important;\n}\n.tile.is-parent {\n  padding: 0.75rem;\n}\n.tile.is-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .tile.is-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333%;\n  }\n  .tile.is-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66667%;\n  }\n  .tile.is-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333%;\n  }\n  .tile.is-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66667%;\n  }\n  .tile.is-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333%;\n  }\n  .tile.is-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66667%;\n  }\n  .tile.is-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333%;\n  }\n  .tile.is-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66667%;\n  }\n  .tile.is-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n}\n.hero {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.hero .navbar {\n  background: none;\n}\n.hero .tabs ul {\n  border-bottom: none;\n}\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-white strong {\n  color: inherit;\n}\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n  }\n}\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-black strong {\n  color: inherit;\n}\n.hero.is-black .title {\n  color: white;\n}\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n.hero.is-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-light strong {\n  color: inherit;\n}\n.hero.is-light .title {\n  color: #363636;\n}\n.hero.is-light .subtitle {\n  color: rgba(54, 54, 54, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: #363636;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(54, 54, 54, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.hero.is-light .tabs a {\n  color: #363636;\n  opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: #363636;\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: #363636;\n  border-color: #363636;\n  color: whitesmoke;\n}\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n.hero.is-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-dark strong {\n  color: inherit;\n}\n.hero.is-dark .title {\n  color: whitesmoke;\n}\n.hero.is-dark .subtitle {\n  color: rgba(245, 245, 245, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: whitesmoke;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(245, 245, 245, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: whitesmoke;\n}\n.hero.is-dark .tabs a {\n  color: whitesmoke;\n  opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: whitesmoke;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: #363636;\n}\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-primary strong {\n  color: inherit;\n}\n.hero.is-primary .title {\n  color: #fff;\n}\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2;\n  }\n}\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2;\n}\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n  }\n}\n.hero.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-link strong {\n  color: inherit;\n}\n.hero.is-link .title {\n  color: #fff;\n}\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-link .navbar-menu {\n    background-color: #3273dc;\n  }\n}\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3273dc;\n}\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n  }\n}\n.hero.is-info {\n  background-color: #209cee;\n  color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-info strong {\n  color: inherit;\n}\n.hero.is-info .title {\n  color: #fff;\n}\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-info .navbar-menu {\n    background-color: #209cee;\n  }\n}\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #118fe4;\n  color: #fff;\n}\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #209cee;\n}\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n  }\n}\n.hero.is-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-success strong {\n  color: inherit;\n}\n.hero.is-success .title {\n  color: #fff;\n}\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-success .navbar-menu {\n    background-color: #23d160;\n  }\n}\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #20bc56;\n  color: #fff;\n}\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #23d160;\n}\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n  }\n}\n.hero.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-warning strong {\n  color: inherit;\n}\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffdd57;\n  }\n}\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n  }\n}\n.hero.is-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),\n.hero.is-danger strong {\n  color: inherit;\n}\n.hero.is-danger .title {\n  color: #fff;\n}\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1087px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #ff3860;\n  }\n}\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ff1f4b;\n  color: #fff;\n}\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n  opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #ff3860;\n}\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n  }\n}\n.hero.is-small .hero-body {\n  padding-bottom: 1.5rem;\n  padding-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding-bottom: 9rem;\n    padding-top: 9rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding-bottom: 18rem;\n    padding-top: 18rem;\n  }\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n.hero-video {\n  overflow: hidden;\n}\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n.hero-head,\n.hero-foot {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.hero-body {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1088px) {\n  .section.is-medium {\n    padding: 9rem 1.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 1.5rem;\n  }\n}\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n.is-primary {\n  background: #183a68;\n  color: #fce6e4; }\n.is-secondary {\n  background: #fce6e4;\n  color: #183a68; }\n.small-text {\n  font-size: 14px; }\n.is-overlay--light {\n  background: rgba(252, 233, 231, 0.5); }\n.is-overlay--dark {\n  background: rgba(25, 58, 105, 0.8); }\n.normal-padding {\n  padding: 16px 0; }\n.medium-padding {\n  padding: 32px 0; }\n.large-padding {\n  padding: 48px 0; }\n.text-content {\n  max-width: 45rem;\n  margin: 0 auto; }\n.text-content h3 {\n    text-align: left; }\n.text-content p {\n    margin-bottom: 1rem; }\n.text-content ul li {\n    padding: 0 0 1rem 20px; }\n.text-content ul li:before {\n      content: url(./static/images/cat.svg);\n      width: 15px;\n      height: 15px;\n      display: inline-block;\n      margin-left: -15px;\n      margin-right: 5px; }\n.align-center {\n  text-align: center; }\n.is-relative {\n  position: relative; }\n.videoWrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* 16:9 */\n  padding-top: 25px;\n  height: 0; }\n.videoWrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n.hljs-comment, .hljs-quote {\n  color: #7e7887; }\n.hljs-variable, .hljs-template-variable, .hljs-attribute, .hljs-regexp, .hljs-link, .hljs-tag, .hljs-name, .hljs-selector-id, .hljs-selector-class {\n  color: #be4678; }\n.hljs-number, .hljs-meta, .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params {\n  color: #aa573c; }\n.hljs-string, .hljs-symbol, .hljs-bullet {\n  color: #2a9292; }\n.hljs-title, .hljs-section {\n  color: #576ddb; }\n.hljs-keyword, .hljs-selector-tag {\n  color: #955ae7; }\n.hljs-deletion, .hljs-addition {\n  color: #19171c;\n  display: inline-block;\n  width: 100%; }\n.hljs-deletion {\n  background-color: #be4678; }\n.hljs-addition {\n  background-color: #2a9292; }\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #19171c;\n  color: #8b8792;\n  padding: 0.5em; }\n.hljs-emphasis {\n  font-style: italic; }\n.hljs-strong {\n  font-weight: bold; }\nbody {\n  font-family: \"Muli\", sans-serif;\n  font-size: 14px; }\nh1 {\n  font-family: \"Ubuntu\", cursive;\n  font-size: 60px; }\nh3 {\n  font-family: \"Ubuntu\", cursive;\n  font-size: 40px;\n  color: #183a68;\n  padding-bottom: 1.5rem;\n  text-align: center;\n  line-height: 55px; }\nh4 {\n  color: #183a68;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 2px; }\n.button {\n  -webkit-transition: all 0.4s ease-in;\n  transition: all 0.4s ease-in;\n  margin: 16px 0; }\n.button.is-primary {\n  background: #183a68;\n  border: 2px solid #183a68; }\n.button.is-primary:hover {\n    background: transparent;\n    border: 2px solid #183a68;\n    color: #183a68; }\n.button.is-yellow {\n  background: #f9b433;\n  color: #183a68;\n  border: none; }\n.button.is-yellow:hover {\n    background: #183a68;\n    color: #fff; }\n.navbar img {\n  width: 50px; }\n.usps h3 {\n  text-align: center; }\n.usps img {\n  width: 80px; }\n.cta-block {\n  background: -webkit-gradient(linear, left top, right top, from(#11bcab), to(#7bcccd));\n  background: linear-gradient(90deg, #11bcab 0%, #7bcccd 100%);\n  text-align: center; }\n.cta-block h3 {\n    color: #fff;\n    font-size: 40px;\n    line-height: 50px; }\n.logos .logo {\n  max-width: 200px;\n  margin: 0 auto;\n  display: block; }\n.content_block {\n  padding-top: 32px; }\n.content_block:last-of-type {\n    padding-bottom: 32px; }\n";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/celinebourillot/Projects/celineb/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/dynamic":
/*!**************************************!*\
  !*** external "next-server/dynamic" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dynamic");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-highlight":
/*!**********************************!*\
  !*** external "react-highlight" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map