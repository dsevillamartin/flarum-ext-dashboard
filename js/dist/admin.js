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

/***/ "./node_modules/compare-versions/index.js":
/*!************************************************!*\
  !*** ./node_modules/compare-versions/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  return function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

}));


/***/ }),

/***/ "./node_modules/p-queue/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-queue/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Port of lower_bound from http://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comp) {
	let first = 0;
	let count = array.length;

	while (count > 0) {
		const step = (count / 2) | 0;
		let it = first + step;

		if (comp(array[it], value) <= 0) {
			first = ++it;
			count -= step + 1;
		} else {
			count = step;
		}
	}

	return first;
}

class PriorityQueue {
	constructor() {
		this._queue = [];
	}

	enqueue(run, options) {
		options = Object.assign({
			priority: 0
		}, options);

		const element = {priority: options.priority, run};

		if (this.size && this._queue[this.size - 1].priority >= options.priority) {
			this._queue.push(element);
			return;
		}

		const index = lowerBound(this._queue, element, (a, b) => b.priority - a.priority);
		this._queue.splice(index, 0, element);
	}

	dequeue() {
		return this._queue.shift().run;
	}

	get size() {
		return this._queue.length;
	}
}

class PQueue {
	constructor(options) {
		options = Object.assign({
			carryoverConcurrencyCount: false,
			intervalCap: Infinity,
			interval: 0,
			concurrency: Infinity,
			autoStart: true,
			queueClass: PriorityQueue
		}, options);

		if (!(typeof options.concurrency === 'number' && options.concurrency >= 1)) {
			throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${options.concurrency}\` (${typeof options.concurrency})`);
		}

		if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
			throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${options.intervalCap}\` (${typeof options.intervalCap})`);
		}

		if (!(typeof options.interval === 'number' && Number.isFinite(options.interval) && options.interval >= 0)) {
			throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${options.interval}\` (${typeof options.interval})`);
		}

		this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
		this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
		this._intervalCount = 0;
		this._intervalCap = options.intervalCap;
		this._interval = options.interval;
		this._intervalId = null;
		this._intervalEnd = 0;
		this._timeoutId = null;

		this.queue = new options.queueClass(); // eslint-disable-line new-cap
		this._queueClass = options.queueClass;
		this._pendingCount = 0;
		this._concurrency = options.concurrency;
		this._isPaused = options.autoStart === false;
		this._resolveEmpty = () => {};
		this._resolveIdle = () => {};
	}

	get _doesIntervalAllowAnother() {
		return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
	}

	get _doesConcurrentAllowAnother() {
		return this._pendingCount < this._concurrency;
	}

	_next() {
		this._pendingCount--;
		this._tryToStartAnother();
	}

	_resolvePromises() {
		this._resolveEmpty();
		this._resolveEmpty = () => {};

		if (this._pendingCount === 0) {
			this._resolveIdle();
			this._resolveIdle = () => {};
		}
	}

	_onResumeInterval() {
		this._onInterval();
		this._initializeIntervalIfNeeded();
		this._timeoutId = null;
	}

	_intervalPaused() {
		const now = Date.now();

		if (this._intervalId === null) {
			const delay = this._intervalEnd - now;
			if (delay < 0) {
				// Act as the interval was done
				// We don't need to resume it here,
				// because it'll be resumed on line 160
				this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
			} else {
				// Act as the interval is pending
				if (this._timeoutId === null) {
					this._timeoutId = setTimeout(() => this._onResumeInterval(), delay);
				}

				return true;
			}
		}

		return false;
	}

	_tryToStartAnother() {
		if (this.queue.size === 0) {
			// We can clear the interval ("pause")
			// because we can redo it later ("resume")
			clearInterval(this._intervalId);
			this._intervalId = null;

			this._resolvePromises();

			return false;
		}

		if (!this._isPaused) {
			const canInitializeInterval = !this._intervalPaused();
			if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
				this.queue.dequeue()();
				if (canInitializeInterval) {
					this._initializeIntervalIfNeeded();
				}

				return true;
			}
		}

		return false;
	}

	_initializeIntervalIfNeeded() {
		if (this._isIntervalIgnored || this._intervalId !== null) {
			return;
		}

		this._intervalId = setInterval(() => this._onInterval(), this._interval);
		this._intervalEnd = Date.now() + this._interval;
	}

	_onInterval() {
		if (this._intervalCount === 0 && this._pendingCount === 0) {
			clearInterval(this._intervalId);
			this._intervalId = null;
		}

		this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
		while (this._tryToStartAnother()) {} // eslint-disable-line no-empty
	}

	add(fn, options) {
		return new Promise((resolve, reject) => {
			const run = () => {
				this._pendingCount++;
				this._intervalCount++;

				try {
					Promise.resolve(fn()).then(
						val => {
							resolve(val);
							this._next();
						},
						err => {
							reject(err);
							this._next();
						}
					);
				} catch (err) {
					reject(err);
					this._next();
				}
			};

			this.queue.enqueue(run, options);
			this._tryToStartAnother();
		});
	}

	addAll(fns, options) {
		return Promise.all(fns.map(fn => this.add(fn, options)));
	}

	start() {
		if (!this._isPaused) {
			return;
		}

		this._isPaused = false;
		while (this._tryToStartAnother()) {} // eslint-disable-line no-empty
	}

	pause() {
		this._isPaused = true;
	}

	clear() {
		this.queue = new this._queueClass(); // eslint-disable-line new-cap
	}

	onEmpty() {
		// Instantly resolve if the queue is empty
		if (this.queue.size === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveEmpty;
			this._resolveEmpty = () => {
				existingResolve();
				resolve();
			};
		});
	}

	onIdle() {
		// Instantly resolve if none pending and if nothing else is queued
		if (this._pendingCount === 0 && this.queue.size === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveIdle;
			this._resolveIdle = () => {
				existingResolve();
				resolve();
			};
		});
	}

	get size() {
		return this.queue.size;
	}

	get pending() {
		return this._pendingCount;
	}

	get isPaused() {
		return this._isPaused;
	}
}

module.exports = PQueue;


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
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
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
      className: "Modal-close App-backControl"
    }, app.extensionSettings[extension.id] && flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-cog',
      onclick: function onclick() {
        return app.extensionSettings[extension.id]();
      },
      className: 'Button Button--icon Button--link'
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-times',
      onclick: this.hide.bind(this),
      className: 'Button Button--icon Button--link'
    })), m("div", {
      className: "DashboardExtensionInfo-Main"
    }, m("spam", {
      className: "DashboardExtensionInfoMain-icon",
      style: extension.icon
    }, extension.icon ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(extension.icon.name) : ''), m("h3", {
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
    }, extension.authors && extension.authors.length === 1 ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-user') : flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-users'), "\xA0", extension.authors ? extension.authors.map(function (e) {
      return e.name;
    }).join(', ') : 'Unknown'), m("p", {
      className: "DashboardExtensionInfoMainUseful-source"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-code'), "\xA0", extension.source ? m("a", {
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

  _proto.isDismissible = function isDismissible() {
    return true;
  };

  _proto.isEnabled = function isEnabled(name) {
    var enabled = JSON.parse(app.data.settings.extensions_enabled);
    return enabled.includes(name);
  };

  _proto.toggle = function toggle(id) {
    var enabled = this.isEnabled(id);
    app.request({
      url: app.forum.attribute('apiUrl') + "/extensions/" + id,
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

/***/ "./src/components/DashboardWidgetExtensions.js":
/*!*****************************************************!*\
  !*** ./src/components/DashboardWidgetExtensions.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardWidgetExtensions; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DashboardWidget */ "flarum/components/DashboardWidget");
/* harmony import */ var flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExtensionUpdatesModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExtensionUpdatesModal */ "./src/components/ExtensionUpdatesModal.js");
/* harmony import */ var _DashboardExtensionInfoModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardExtensionInfoModal */ "./src/components/DashboardExtensionInfoModal.js");







var DashboardWidgetExtensions =
/*#__PURE__*/
function (_DashboardWidget) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DashboardWidgetExtensions, _DashboardWidget);

  function DashboardWidgetExtensions() {
    return _DashboardWidget.apply(this, arguments) || this;
  }

  var _proto = DashboardWidgetExtensions.prototype;

  _proto.content = function content() {
    var _this = this;

    var extensions = app.data.extensions;
    return m("div", null, m("div", {
      className: "DashboardExtensions--Title"
    }, m("span", null, app.translator.trans('core.admin.nav.extensions_button')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      children: flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-upload'),
      className: 'Button',
      onclick: function onclick() {
        return app.modal.show(new _ExtensionUpdatesModal__WEBPACK_IMPORTED_MODULE_4__["default"]());
      }
    })), m("div", {
      className: "DashboardExtensions--List"
    }, Object.values(extensions).map(function (extension) {
      return m("li", {
        className: 'DashboardExtensions--Item ' + (_this.isEnabled(extension.id) ? 'enabled' : 'disabled'),
        onclick: function onclick() {
          return app.modal.show(new _DashboardExtensionInfoModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
            extension: extension
          }));
        }
      }, m("div", {
        className: "DashboardExtensionsItem-content"
      }, m("spam", {
        className: "DashboardExtensionsItem-icon",
        style: extension.icon
      }, extension.icon ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(extension.icon.name) : ''), m("label", {
        className: "DashboardExtensionsItem-title"
      }, extension.extra['flarum-extension'].title)));
    })));
  };

  _proto.isEnabled = function isEnabled(name) {
    var enabled = JSON.parse(app.data.settings.extensions_enabled);
    return enabled.includes(name);
  };

  _proto.className = function className() {
    return 'DashboardExtensions';
  };

  return DashboardWidgetExtensions;
}(flarum_components_DashboardWidget__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/components/DashboardWidgetGraph.js":
/*!************************************************!*\
  !*** ./src/components/DashboardWidgetGraph.js ***!
  \************************************************/
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

  _proto.init = function init() {
    _DashboardWidget.prototype.init.call(this);

    this.months = [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.january'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.february'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.march'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.april'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.may'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.june'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.july'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.august'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.september'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.october'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.november'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('datitisev-dashboard.admin.dashboard.months.december')];
  };

  _proto.content = function content() {
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
    return 'DashboardGraph';
  };

  _proto.graphView = function graphView() {
    return m("div", {
      className: "DashboardGraph--Graph"
    }, Object.keys(this.months).map(function (id) {
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
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/index.js");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(p_queue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compare-versions */ "./node_modules/compare-versions/index.js");
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compare_versions__WEBPACK_IMPORTED_MODULE_4__);






var ExtensionUpdatesModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionUpdatesModal, _Modal);

  function ExtensionUpdatesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ExtensionUpdatesModal.prototype;

  _proto.init = function init() {
    this.loading = true;
    this.needsUpdate = [];
    this.errors = [];
    this.getPackagesAndVersions();
  };

  _proto.className = function className() {
    return 'DashboardSettingsModal ExtensionUpdatesModal Modal--large';
  };

  _proto.title = function title() {
    var updates = this.needsUpdate.length;

    if (updates > 0) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.transChoice('datitisev-dashboard.admin.dashboard.updates.available', updates, {
        count: updates
      });
    }

    if (this.loading) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.updates.checking');
    } else if (updates === 0) {
      return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.updates.none');
    }
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "PermissionGrid container"
    }, m("table", {
      className: "PermissionGrid",
      style: !this.errors && this.needsUpdate.length === 0 ? 'display: none' : ''
    }, m("thead", null, m("tr", null, m("th", null, "Extension", this.loading && m("span", null, "\xA0\xA0", m("i", {
      className: "fas fa-circle-notch fa-spin"
    }))), m("th", null, "Version Installed"), m("th", null, "New Version"))), m("tbody", null, Object.keys(this.needsUpdate).map(function (id) {
      var extension = _this.needsUpdate[id];
      return m("tr", {
        className: "PermissionGrid-child"
      }, m("td", null, extension.name), m("td", null, extension.oldVersion), m("td", null, extension.newVersion));
    }), this.errors && this.errors.map(function (ext) {
      return m("tr", {
        className: "ExtensionUpdatesModal--Error PermissionGrid-child"
      }, m("td", null, ext.name), m("td", null, ext.version), m("td", null, ext.error));
    }))), m("div", {
      style: this.needsUpdate.length === 0 && !this.errors && !this.loading ? '' : 'display: none'
    }, m("h3", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('datitisev-dashboard.admin.dashboard.updates.none'))));
  };

  _proto.getPackagesAndVersions = function getPackagesAndVersions() {
    var _this2 = this;

    var queue = new p_queue__WEBPACK_IMPORTED_MODULE_3___default.a({
      intervalCap: 2,
      interval: 500
    });
    var extensions = Object.values(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.extensions).filter(function (v) {
      return !v.version.startsWith('dev');
    });
    var promises = extensions.map(function (extension) {
      return function () {
        return m.request({
          url: "https://packagist.org/packages/" + extension.name + ".json"
        }).then(function (data) {
          data = data.package;
          var versions = Object.keys(data.versions).filter(function (v) {
            return !v.startsWith('dev');
          }).sort(compare_versions__WEBPACK_IMPORTED_MODULE_4__);
          var latestVersion = versions[versions.length - 1];
          var version = extension.version;

          if (latestVersion && version !== latestVersion) {
            _this2.extensionUpdates = _this2.needsUpdate.length + 1;
            return _this2.needsUpdate.push({
              name: extension.name,
              oldVersion: version,
              newVersion: latestVersion
            });
          }

          m.redraw();
        }).catch(function (err) {
          if (!err || typeof err !== 'object' || !err.message) return false;

          _this2.errors.push({
            name: extension.name,
            version: extension.version,
            error: err.status ? err.status + ": " + err.message : err.message
          });
        });
      };
    });
    queue.addAll(promises).then(function () {
      return _this2.loading = false;
    });
  };

  return ExtensionUpdatesModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DashboardPage */ "flarum/components/DashboardPage");
/* harmony import */ var flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DashboardWidgetGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DashboardWidgetGraph */ "./src/components/DashboardWidgetGraph.js");
/* harmony import */ var _components_DashboardWidgetExtensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DashboardWidgetExtensions */ "./src/components/DashboardWidgetExtensions.js");





app.initializers.add('datitisev/dashboard', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.remove('extensions');
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DashboardPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'availableWidgets', function (items) {
    items.push(m(_components_DashboardWidgetGraph__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    items.push(m(_components_DashboardWidgetExtensions__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  });
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

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map