module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./src/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/changeDashboardPage.js":
/*!************************************!*\
  !*** ./src/changeDashboardPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DashboardPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DashboardPage */ "./src/components/DashboardPage.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes.dashboard = {
    path: '/',
    component: _components_DashboardPage__WEBPACK_IMPORTED_MODULE_0__["default"].component()
  };
});

/***/ }),

/***/ "./src/components/DashboardConfigurationModal.js":
/*!*******************************************************!*\
  !*** ./src/components/DashboardConfigurationModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardConfigurationModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);




var DashboardConfigurationModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DashboardConfigurationModal, _Modal);

  function DashboardConfigurationModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = DashboardConfigurationModal.prototype;

  _proto.init = function init() {
    this.page = this.props.page;
  };

  _proto.className = function className() {
    return 'DashboardConfigurationModal Modal--large';
  };

  _proto.content = function content() {
    var page = app.routes[this.page.props.href.replace('/', '')];
    return m("div", null, new page.component.component());
  };

  return DashboardConfigurationModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/components/DashboardExtensionInfoModal.js":
/*!*******************************************************!*\
  !*** ./src/components/DashboardExtensionInfoModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardExtensionInfoModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);






var DashboardExtensionInfoModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DashboardExtensionInfoModal, _Modal);

  function DashboardExtensionInfoModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = DashboardExtensionInfoModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.extension = this.props.extension;
  };

  _proto.className = function className() {
    return 'DashboardExtensionInfoModal Modal--large';
  };

  _proto.content = function content() {
    var extension = this.extension;
    var isEnabled = this.isEnabled(extension.id);
    return m("div", {
      className: "DashboardExtensionInfo"
    }, m("div", {
      className: "DashboardExtensionInfo-Main"
    }, m("spam", {
      className: "DashboardExtensionInfoMain-icon",
      style: extension.icon
    }, extension.icon ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(extension.icon.name) : ''), m("h3", {
      className: "DashboardExtensionInfoMain-title"
    }, extension.extra['flarum-extension'].title), m("span", {
      className: "DashboardExtensionInfoMain-name"
    }, extension.name), m("span", {
      className: "DashboardExtensionInfoMain-version"
    }, extension.version), m("p", {
      className: "DashboardExtensionInfoMain-description"
    }, extension.description || ' '), m("p", {
      className: "DashboardExtensionInfoMain-useful"
    }, m("p", {
      className: "DashboardExtensionInfoMainUseful-author"
    }, extension.authors && extension.authors.length == 1 ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('user') : flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('users'), " ", extension.authors ? extension.authors.map(function (e) {
      return e.name;
    }).join(', ') : 'Unknown'), m("p", {
      className: "DashboardExtensionInfoMainUseful-source"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('code'), " ", extension.source ? m("a", {
      href: extension.source.url,
      target: "_blank"
    }, "Source") : 'Unknown')), m("div", {
      className: "DashboardExtensionInfoMain-enabled"
    }, flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: isEnabled,
      children: isEnabled ? 'Enabled' : 'Disabled',
      onchange: this.toggle.bind(this, extension.id)
    }))));
  };

  _proto.isEnabled = function isEnabled(name) {
    var enabled = JSON.parse(app.data.settings.extensions_enabled);
    return enabled.indexOf(name) !== -1;
  };

  _proto.toggle = function toggle(id) {
    var enabled = this.isEnabled(id);
    app.request({
      url: app.forum.attribute('apiUrl') + '/extensions/' + id,
      method: 'PATCH',
      data: {
        enabled: !enabled
      }
    }).then(function () {
      var enabledArr = JSON.parse(app.data.settings.extensions_enabled);
      if (!enabled) enabledArr.push(id);else enabledArr.splice(enabledArr.indexOf(id), 1);
      app.data.settings.extensions_enabled = JSON.stringify(enabledArr);
      m.redraw();
    });
  };

  return DashboardExtensionInfoModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/components/DashboardPage.js":
/*!*****************************************!*\
  !*** ./src/components/DashboardPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DashboardPage */ "flarum/components/DashboardPage");
/* harmony import */ var flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WidgetGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WidgetGraph */ "./src/components/WidgetGraph.js");
/* harmony import */ var _DashboardExtensionInfoModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DashboardExtensionInfoModal */ "./src/components/DashboardExtensionInfoModal.js");
/* harmony import */ var _DashboardConfigurationModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DashboardConfigurationModal */ "./src/components/DashboardConfigurationModal.js");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ExtensionUpdatesModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ExtensionUpdatesModal */ "./src/components/ExtensionUpdatesModal.js");













var DashboardPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DashboardPage, _Page);

  function DashboardPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = DashboardPage.prototype;

  _proto.init = function init() {
    this.extensions = app.data.extensions;

    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    var _this = this;

    // const pages = AdminNav.prototype.items();
    // pages.remove('dashboard');
    // pages.remove('extensions');
    return m("div", {
      className: "DashboardPage"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "DashboardPage--Widgets"
    }, Object.keys(this.items().items).map(function (id) {
      var section = _this.items().get(id);

      if (section) return section;
    })), m("div", {
      className: "DashboardPageExtensions"
    }, m("p", {
      className: "DashboardPageExtensions--Title"
    }, m("span", null, app.translator.trans('core.admin.nav.extensions_button')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      children: flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-sync'),
      className: 'Button',
      onclick: function onclick() {
        return app.modal.show(new _ExtensionUpdatesModal__WEBPACK_IMPORTED_MODULE_11__["default"]());
      }
    })), Object.keys(this.extensions).map(function (id) {
      var extension = _this.extensions[id];
      return m("li", {
        className: "DashboardPageExtensions--Item",
        onclick: function onclick() {
          app.modal.show(new _DashboardExtensionInfoModal__WEBPACK_IMPORTED_MODULE_8__["default"]({
            extension: extension
          }));
        }
      }, m("div", {
        className: "DashboardExtensionsItem-content"
      }, m("spam", {
        className: "DashboardExtensionsItem-icon",
        style: extension.icon
      }, extension.icon ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()(extension.icon.name) : ''), m("label", {
        className: "DashboardExtensionsItem-title"
      }, extension.extra['flarum-extension'].title)));
    }))));
  };

  _proto.items = function items() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a();

    for (var _iterator = flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.availableWidgets(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var item = _ref;
      if (item.component.name === 'StatisticsWidget') continue;
      items.add(item.component.name, item);
    }

    items.add('countData', m(_WidgetGraph__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    return items;
  };

  return DashboardPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/components/DashboardSettingsModal.js":
/*!**************************************************!*\
  !*** ./src/components/DashboardSettingsModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);




var DashboardSettingsModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DashboardSettingsModal, _SettingsModal);

  function DashboardSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = DashboardSettingsModal.prototype;

  _proto.className = function className() {
    return 'DashboardSettingsModal Modal--medium';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.settings.title');
  };

  _proto.form = function form() {
    return [m("div", {
      className: "Form-group"
    }, m("h2", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.settings.github_heading')), m("label", {
      htmlFor: "client_id"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.settings.clientId_label')), m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.setting('datitisev-dashboard.github.client_id')
    }), m("label", {
      htmlFor: "client_id"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.settings.clientSecret_label')), m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.setting('datitisev-dashboard.github.client_secret')
    }), m("h2", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.settings.graph_heading')), m("label", {
      htmlFor: "client_id"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.settings.interval_label')), m("input", {
      type: "number",
      className: "FormControl",
      bidi: this.setting('datitisev-dashboard.graph.dataInterval')
    }))];
  };

  return DashboardSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/components/ExtensionUpdatesModal.js":
/*!*************************************************!*\
  !*** ./src/components/ExtensionUpdatesModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtensionUpdatesModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);




var ExtensionUpdatesModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionUpdatesModal, _Modal);

  function ExtensionUpdatesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ExtensionUpdatesModal.prototype;

  _proto.init = function init() {
    this.extensionUpdates = 0;
    this.loading = true;
    this.needsUpdate = [];
    this.error = null;
    this.solution = null;
    this.getPackagesAndVersions();
  };

  _proto.className = function className() {
    return 'DashboardSettingsModal ExtensionUpdatesModal Modal--large';
  };

  _proto.title = function title() {
    if (this.extensionUpdates > 0) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.updatesAvaliable', {
        number: this.extensionUpdates
      });
    }

    if (this.error) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.error');
    }

    if (this.loading) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.checking');
    } else if (this.extensionUpdates == 0) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.noUpdates');
    }
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "PermissionGrid container"
    }, m("table", {
      className: "PermissionGrid",
      style: this.error || this.extensionUpdates == 0 ? 'display: none' : ''
    }, m("thead", null, m("tr", null, m("th", null, "Extension"), m("th", null, "Version Installed"), m("th", null, "New Version"))), m("tbody", null, Object.keys(this.needsUpdate).map(function (id) {
      var extension = _this.needsUpdate[id];
      return m("tr", {
        className: "ExtensionList--Item PermissionGrid-child"
      }, m("td", {
        className: "ExtensionListItem--Name"
      }, extension.name), m("td", {
        className: "ExtensionListItem--Installed"
      }, extension.oldVersion), m("td", {
        className: "ExtensionListItem--NewVersion"
      }, extension.newVersion));
    }))), m("div", {
      className: this.error ? '' : 'ExtensionUpdatesModal--Error hidden'
    }, m("p", null, m.trust(this.error)), m("p", null, m.trust(this.solution))), m("div", {
      style: this.extensionUpdates == 0 && !this.error && !this.loading ? '' : 'display: none'
    }, m("h3", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.noUpdates'))));
  };

  _proto.getPackagesAndVersions = function getPackagesAndVersions() {
    var _this2 = this;

    var extensions = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.extensions;
    var extensionNames = Object.keys(extensions);
    extensionNames.forEach(function (el, i, o) {
      if (!extensions[el] || !extensions[el].source) return false;
      var currentExtension = extensions[el];
      var source = currentExtension.source.url.replace('.git', '').replace('github.com', 'api.github.com/repos');

      if (source.indexOf('github.com') >= 0) {
        source = 'https://api.github.com/repos/' + currentExtension.name + '/tags';
        source += '?client_id=' + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('datitisev-dashboard.github.client_id') + '&client_secret=' + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('datitisev-dashboard.github.client_secret');
      } else return false;

      _this2.request({
        url: source,
        method: 'GET'
      }).then(function (data) {
        if (_this2.error) _this2.error = null;

        if (data) {
          var newVersion = data && data.length ? data[0].name : null;
          var version = currentExtension.version; // let version = 'some_other_version';

          if (newVersion && version != newVersion && version !== 'dev-master' && version != '@dev') {
            _this2.extensionUpdates = _this2.needsUpdate.length + 1;
            Promise.resolve(_this2.needsUpdate.push({
              name: currentExtension.name,
              oldVersion: version,
              newVersion: newVersion
            })).then(function () {
              if (o.length - 1 == i) {
                _this2.extensionUpdates = _this2.needsUpdate.length;
                _this2.loading = false;
                m.redraw();
              } else {
                m.redraw();
              }
            }).catch(function (error) {
              _this2.error = error;
              m.redraw();
            });
          } else {
            _this2.extensionUpdates = _this2.needsUpdate.length;

            if (o.length - 1 == i) {
              _this2.loading = false;
              m.redraw();
            } else {
              m.redraw();
            }
          }
        }
      }).catch(function (err) {
        if (!err || typeof err != 'object' || !err.message) return false;
        var error = err.message.indexOf('rate limit') >= 0 ? err.message.substr(0, 38) : err.message;

        if (error == 'Not Found' && o.length - 1 == i) {
          _this2.loading = false;
          m.redraw();
        } else if (error == 'Not Found') return false;

        var solution = err.message.indexOf('rate limit') >= 0 ? flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.addClientIdAndSecret') : '';
        _this2.error = '<b>GitHub:</b> ' + error;
        _this2.solution = solution;
        _this2.loading = false;
        m.redraw();
      });
    });
    setTimeout(function () {
      _this2.error = '';
      _this2.solution = '';
      _this2.extensionUpdates = 0;
      _this2.needsUpdate = [];
      _this2.loading = false;

      _this2.getPackagesAndVersions();

      m.redraw();
    }, 60000);
  };

  _proto.request = function request(par) {
    return new Promise(function (resolve, reject) {
      m.request({
        method: par.method ? par.method : "GET",
        url: par.url
      }).then(resolve).catch(reject);
    });
  };

  return ExtensionUpdatesModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/components/WidgetGraph.js":
/*!***************************************!*\
  !*** ./src/components/WidgetGraph.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardWidgetGraph; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DashboardWidget */ "flarum/components/DashboardWidget");
/* harmony import */ var flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2__);




var DashboardWidgetGraph =
/*#__PURE__*/
function (_DashboardWidget) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DashboardWidgetGraph, _DashboardWidget);

  function DashboardWidgetGraph() {
    return _DashboardWidget.apply(this, arguments) || this;
  }

  var _proto = DashboardWidgetGraph.prototype;

  _proto.content = function content() {
    var months = [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.january'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.february'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.march'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.april'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.may'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.june'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.july'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.august'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.september'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.october'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.november'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.december')];

    var _app$forum$attribute = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('datitisev-dashboard.data'),
        userCount = _app$forum$attribute.userCount,
        discussionCount = _app$forum$attribute.discussionCount,
        postCount = _app$forum$attribute.postCount;

    return m("div", {
      className: "DashboardGraph--Categories"
    }, m("div", {
      className: "DashboardGraph--Category Category--Users"
    }, m("span", {
      className: "color"
    }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.graph.users'), m("br", null), m("span", {
      className: "number"
    }, userCount)), m("div", {
      className: "DashboardGraph--Category Category--Discussions"
    }, m("span", {
      className: "color"
    }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions'), m("br", null), m("span", {
      className: "number"
    }, discussionCount)), m("div", {
      className: "DashboardGraph--Category Category--Posts"
    }, m("span", {
      className: "color"
    }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts'), m("br", null), m("span", {
      className: "number"
    }, postCount)));
  };

  _proto.className = function className() {
    return "DashboardGraph";
  };

  _proto.graphView = function graphView() {
    return m("div", {
      className: "DashboardGraph--Graph"
    }, Object.keys(months).map(function (id) {
      var month = months[id];
      return m("div", {
        className: "DashboardGraph--Month"
      }, m("div", {
        className: "bars"
      }, "BAR"), m("div", {
        className: "name"
      }, month));
    }));
  };

  return DashboardWidgetGraph;
}(flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _changeDashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeDashboardPage */ "./src/changeDashboardPage.js");
/* harmony import */ var _components_DashboardSettingsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DashboardSettingsModal */ "./src/components/DashboardSettingsModal.js");




flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('datitisev/dashboard', function () {
  Object(_changeDashboardPage__WEBPACK_IMPORTED_MODULE_2__["default"])();

  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.extensionSettings['datitisev-dashboard'] = function () {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_DashboardSettingsModal__WEBPACK_IMPORTED_MODULE_3__["default"]());
  };
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DashboardPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/DashboardPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DashboardPage'];

/***/ }),

/***/ "flarum/components/DashboardWidget":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/DashboardWidget']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DashboardWidget'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map