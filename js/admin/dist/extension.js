System.register('datitisev/dashboard/changeDashboardPage', ['flarum/extend', 'flarum/components/DashboardPage', 'datitisev/dashboard/components/DashboardPage'], function (_export) {
    'use strict';

    var extend, DashboardPage, NewDashboardPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsDashboardPage) {
            DashboardPage = _flarumComponentsDashboardPage['default'];
        }, function (_datitisevDashboardComponentsDashboardPage) {
            NewDashboardPage = _datitisevDashboardComponentsDashboardPage['default'];
        }],
        execute: function () {
            _export('default', function () {

                DashboardPage.prototype.view = function () {

                    return new NewDashboardPage();
                };
            });
        }
    };
});;
System.register('datitisev/dashboard/components/DashboardPage', ['flarum/extend', 'flarum/Component', 'flarum/app', 'flarum/components/Button', 'datitisev/dashboard/components/DashboardGraph', 'datitisev/dashboard/components/ExtensionUpdatesModal'], function (_export) {
    'use strict';

    var extend, Component, app, Button, DashboardGraph, ExtensionUpdatesModal, error, solution, loadedUpdates, extensionUpdates, DashboardPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton['default'];
        }, function (_datitisevDashboardComponentsDashboardGraph) {
            DashboardGraph = _datitisevDashboardComponentsDashboardGraph['default'];
        }, function (_datitisevDashboardComponentsExtensionUpdatesModal) {
            ExtensionUpdatesModal = _datitisevDashboardComponentsExtensionUpdatesModal['default'];
        }],
        execute: function () {
            error = null;
            solution = null;
            loadedUpdates = false;
            extensionUpdates = 'checking';

            DashboardPage = (function (_Component) {
                babelHelpers.inherits(DashboardPage, _Component);

                function DashboardPage() {
                    babelHelpers.classCallCheck(this, DashboardPage);
                    babelHelpers.get(Object.getPrototypeOf(DashboardPage.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardPage, [{
                    key: 'init',
                    value: function init() {}
                }, {
                    key: 'view',
                    value: function view() {
                        return m(
                            'div',
                            { className: 'DashboardPage' },
                            m(
                                'div',
                                { className: 'container' },
                                m(
                                    'h2',
                                    null,
                                    app.translator.trans('core.admin.dashboard.welcome_text')
                                ),
                                new DashboardGraph(),
                                m(
                                    'div',
                                    { className: 'DashboardPage--Versions' },
                                    m(
                                        'ul',
                                        null,
                                        m(
                                            'li',
                                            null,
                                            Button.component({
                                                children: app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.checkUpdates_button'),
                                                className: 'Button Button--primary ' + (extensionUpdates == 0 ? 'disabled' : ''),
                                                disabled: false,
                                                loading: false,
                                                onclick: function onclick() {
                                                    app.modal.show(new ExtensionUpdatesModal());
                                                }
                                            })
                                        ),
                                        m(
                                            'li',
                                            null,
                                            app.translator.trans('datitisev-dashboard.admin.dashboard.flarum_version', { version: m(
                                                    'strong',
                                                    null,
                                                    app.forum.attribute('version')
                                                ) })
                                        ),
                                        m(
                                            'li',
                                            null,
                                            app.translator.trans('datitisev-dashboard.admin.dashboard.php_version', { version: m(
                                                    'strong',
                                                    null,
                                                    app.settings['phpVersion']
                                                ) })
                                        )
                                    )
                                )
                            )
                        );
                    }
                }, {
                    key: 'getPackagesAndVersions',
                    value: function getPackagesAndVersions() {
                        var _this = this;

                        loadedUpdates = true;

                        return new Promise(function (resolve, reject) {

                            var extensions = app.extensions;
                            var extensionNames = Object.getOwnPropertyNames(extensions);
                            var needsUpdate = [];

                            extensionNames.forEach(function (el, i, o) {

                                if (!extensions[el] || !extensions[el].source) return false;

                                var currentExtension = extensions[el];

                                var source = currentExtension.source.url.replace('github.com', 'api.github.com/repos');

                                if (source.indexOf('github.com') >= 0) {
                                    source = 'https://api.github.com/repos/' + currentExtension.name + '/releases';
                                    source += '?client_id=' + app.forum.attribute('datitisev-dashboard.github.client_id') + '&client_secret=' + app.forum.attribute('datitisev-dashboard.github.client_secret');
                                } else return false;

                                _this.request({
                                    url: source,
                                    method: 'GET'
                                }).then(function (data) {

                                    if (data) {
                                        var newVersion = data && data.length ? data[0].tag_name : null;
                                        var version = currentExtension.version;
                                        // let version = 'some_other_version';

                                        if (newVersion && version != newVersion && version !== 'dev-master' && version != '@dev') {
                                            Promise.resolve(needsUpdate.push({
                                                name: currentExtension.name,
                                                oldVersion: version,
                                                newVersion: newVersion
                                            })).then(function () {
                                                if (o.length - 1 == i) {
                                                    resolve(needsUpdate);
                                                }
                                            });
                                        }
                                    }

                                    if (o.length - 1 == i) {
                                        resolve(needsUpdate);
                                    }
                                })['catch'](function (err) {

                                    var warning = err.message.indexOf('rate limit') >= 0 ? err.message.substr(0, 38) : err.message;

                                    reject(warning);
                                });
                            });
                        });
                    }
                }, {
                    key: 'request',
                    value: function request(par) {

                        return new Promise(function (resolve, reject) {

                            m.request({
                                method: par.method ? par.method : "GET",
                                url: par.url
                            }).then(resolve)['catch'](reject);
                        });
                    }
                }]);
                return DashboardPage;
            })(Component);

            _export('default', DashboardPage);
        }
    };
});;
System.register('datitisev/dashboard/components/DashboardSettingsModal', ['flarum/components/SettingsModal', 'flarum/app'], function (_export) {
    'use strict';

    var SettingsModal, app, DashboardSettingsModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {
            DashboardSettingsModal = (function (_SettingsModal) {
                babelHelpers.inherits(DashboardSettingsModal, _SettingsModal);

                function DashboardSettingsModal() {
                    babelHelpers.classCallCheck(this, DashboardSettingsModal);
                    babelHelpers.get(Object.getPrototypeOf(DashboardSettingsModal.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardSettingsModal, [{
                    key: 'className',
                    value: function className() {
                        return 'DashboardSettingsModal Modal--medium';
                    }
                }, {
                    key: 'title',
                    value: function title() {
                        return app.translator.trans('datitisev-dashboard.admin.settings.title');
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        return [m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'h2',
                                null,
                                app.translator.trans('datitisev-dashboard.admin.settings.github_heading')
                            ),
                            m(
                                'label',
                                { htmlFor: 'client_id' },
                                app.translator.trans('datitisev-dashboard.admin.settings.clientId_label')
                            ),
                            m('input', { type: 'text', className: 'FormControl', bidi: this.setting('datitisev-dashboard.github.client_id') }),
                            m(
                                'label',
                                { htmlFor: 'client_id' },
                                app.translator.trans('datitisev-dashboard.admin.settings.clientSecret_label')
                            ),
                            m('input', { type: 'text', className: 'FormControl', bidi: this.setting('datitisev-dashboard.github.client_secret') }),
                            m(
                                'h2',
                                null,
                                app.translator.trans('datitisev-dashboard.admin.settings.graph_heading')
                            ),
                            m(
                                'label',
                                { htmlFor: 'client_id' },
                                app.translator.trans('datitisev-dashboard.admin.settings.interval_label')
                            ),
                            m('input', { type: 'number', className: 'FormControl', bidi: this.setting('datitisev-dashboard.graph.dataInterval') })
                        )];
                    }
                }]);
                return DashboardSettingsModal;
            })(SettingsModal);

            _export('default', DashboardSettingsModal);
        }
    };
});;
System.register('datitisev/dashboard/components/ExtensionUpdatesModal', ['flarum/components/Modal', 'flarum/app'], function (_export) {
    'use strict';

    var Modal, app, ExtensionUpdatesModal;
    return {
        setters: [function (_flarumComponentsModal) {
            Modal = _flarumComponentsModal['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {
            ExtensionUpdatesModal = (function (_Modal) {
                babelHelpers.inherits(ExtensionUpdatesModal, _Modal);

                function ExtensionUpdatesModal() {
                    babelHelpers.classCallCheck(this, ExtensionUpdatesModal);
                    babelHelpers.get(Object.getPrototypeOf(ExtensionUpdatesModal.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(ExtensionUpdatesModal, [{
                    key: 'init',
                    value: function init() {
                        this.extensionUpdates = 0;
                        this.loading = true;
                        this.needsUpdate = [];

                        this.error = null;
                        this.solution = null;

                        this.getPackagesAndVersions();
                    }
                }, {
                    key: 'className',
                    value: function className() {
                        return 'DashboardSettingsModal ExtensionUpdatesModal Modal--large';
                    }
                }, {
                    key: 'title',
                    value: function title() {

                        if (this.extensionUpdates > 0) {
                            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.updatesAvaliable', { number: this.extensionUpdates });
                        }
                        if (this.error) {
                            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.error');
                        }

                        if (this.loading) {
                            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.checking');
                        } else if (this.extensionUpdates == 0) {
                            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.noUpdates');
                        }
                    }
                }, {
                    key: 'content',
                    value: function content() {
                        var _this = this;

                        return m(
                            'div',
                            { className: 'PermissionGrid container' },
                            m(
                                'table',
                                { className: 'PermissionGrid', style: this.error || this.extensionUpdates == 0 ? 'display: none' : '' },
                                m(
                                    'thead',
                                    null,
                                    m(
                                        'tr',
                                        null,
                                        m(
                                            'th',
                                            null,
                                            'Extension'
                                        ),
                                        m(
                                            'th',
                                            null,
                                            'Version Installed'
                                        ),
                                        m(
                                            'th',
                                            null,
                                            'New Version'
                                        )
                                    )
                                ),
                                m(
                                    'tbody',
                                    null,
                                    Object.keys(this.needsUpdate).map(function (id) {
                                        var extension = _this.needsUpdate[id];
                                        return m(
                                            'tr',
                                            { className: 'ExtensionList--Item PermissionGrid-child' },
                                            m(
                                                'td',
                                                { className: 'ExtensionListItem--Name' },
                                                extension.name
                                            ),
                                            m(
                                                'td',
                                                { className: 'ExtensionListItem--Installed' },
                                                extension.oldVersion
                                            ),
                                            m(
                                                'td',
                                                { className: 'ExtensionListItem--NewVersion' },
                                                extension.newVersion
                                            )
                                        );
                                    })
                                )
                            ),
                            m(
                                'div',
                                { className: this.error ? '' : 'ExtensionUpdatesModal--Error hidden' },
                                m(
                                    'p',
                                    null,
                                    this.error
                                ),
                                m(
                                    'p',
                                    null,
                                    this.solution
                                ),
                                m(
                                    'p',
                                    null,
                                    app.translator.trans('datitisev-dashboard.admin.settings.github_createApp')
                                )
                            ),
                            m(
                                'div',
                                { style: this.extensionUpdates == 0 ? '' : 'display: none' },
                                m(
                                    'h3',
                                    null,
                                    app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.noUpdates')
                                )
                            )
                        );
                    }
                }, {
                    key: 'getPackagesAndVersions',
                    value: function getPackagesAndVersions() {
                        var _this2 = this;

                        var extensions = app.extensions;
                        var extensionNames = Object.getOwnPropertyNames(extensions);

                        extensionNames.forEach(function (el, i, o) {

                            if (!extensions[el] || !extensions[el].source) return false;

                            var currentExtension = extensions[el];

                            var source = currentExtension.source.url.replace('github.com', 'api.github.com/repos');

                            if (source.indexOf('github.com') >= 0) {
                                source = 'https://api.github.com/repos/' + currentExtension.name + '/releases';
                                source += '?client_id=' + app.forum.attribute('datitisev-dashboard.github.client_id') + '&client_secret=' + app.forum.attribute('datitisev-dashboard.github.client_secret');
                            } else return false;

                            _this2.request({
                                url: source,
                                method: 'GET'
                            }).then(function (data) {

                                if (_this2.error) _this2.error = null;

                                if (data) {
                                    var newVersion = data && data.length ? data[0].tag_name : null;
                                    var version = currentExtension.version;
                                    // let version = 'some_other_version';

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
                                        })['catch'](function (error) {
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
                            })['catch'](function (err) {

                                try {

                                    var error = err.message.indexOf('rate limit') >= 0 ? err.message.substr(0, 38) : err.message;
                                    var solution = err.message.indexOf('rate limit') >= 0 ? app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.addClientIdAndSecret') : '';

                                    _this2.error = 'GitHub: ' + error;
                                    _this2.solution = solution;

                                    _this2.loading = false;

                                    m.redraw();
                                } catch (err) {
                                    console.error(err);
                                }
                            });
                        });

                        setTimeout(function () {
                            _this2.error = '';
                            _this2.solution = '';
                            _this2.extensionUpdates = 0;
                            _this2.needsUpdate = [];
                            _this2.loading = false;
                            m.redraw();
                        }, 20000);
                    }
                }, {
                    key: 'request',
                    value: function request(par) {

                        return new Promise(function (resolve, reject) {

                            m.request({
                                method: par.method ? par.method : "GET",
                                url: par.url
                            }).then(resolve)['catch'](reject);
                        });
                    }
                }]);
                return ExtensionUpdatesModal;
            })(Modal);

            _export('default', ExtensionUpdatesModal);
        }
    };
});;
System.register('datitisev/dashboard/components/WidgetGraph', ['flarum/extend', 'flarum/app', 'datitisev/dashboard/DashboardSection'], function (_export) {
    'use strict';

    var extend, app, DashboardSection, loadedStuff, discussions, users, posts, warning, DashboardWidgetGraph;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_datitisevDashboardDashboardSection) {
            DashboardSection = _datitisevDashboardDashboardSection['default'];
        }],
        execute: function () {
            loadedStuff = false;
            discussions = null;
            users = null;
            posts = null;
            warning = null;

            DashboardWidgetGraph = (function (_DashboardSection) {
                babelHelpers.inherits(DashboardWidgetGraph, _DashboardSection);

                function DashboardWidgetGraph() {
                    babelHelpers.classCallCheck(this, DashboardWidgetGraph);
                    babelHelpers.get(Object.getPrototypeOf(DashboardWidgetGraph.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardWidgetGraph, [{
                    key: 'config',
                    value: function config() {
                        if (!loadedStuff) this.getGraphData();
                    }
                }, {
                    key: 'content',
                    value: function content() {
                        var months = [app.translator.trans('datitisev-dashboard.admin.dashboard.months.january'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.february'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.march'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.april'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.may'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.june'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.july'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.august'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.september'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.october'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.november'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.december')];

                        return m(
                            'div',
                            { className: 'DashboardGraph--Categories' },
                            m(
                                'div',
                                { className: 'DashboardGraph--Category Category--Users' },
                                m('span', { className: 'color' }),
                                app.translator.trans('datitisev-dashboard.admin.dashboard.graph.users'),
                                m('br', null),
                                m(
                                    'span',
                                    { className: 'number' },
                                    users ? users : '...'
                                )
                            ),
                            m(
                                'div',
                                { className: 'DashboardGraph--Category Category--Discussions' },
                                m('span', { className: 'color' }),
                                app.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions'),
                                m('br', null),
                                m(
                                    'span',
                                    { className: 'number' },
                                    discussions ? discussions : '...'
                                )
                            ),
                            m(
                                'div',
                                { className: 'DashboardGraph--Category Category--Posts' },
                                m('span', { className: 'color' }),
                                app.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts'),
                                m('br', null),
                                m(
                                    'span',
                                    { className: 'number' },
                                    posts ? posts : '...'
                                )
                            )
                        );
                    }
                }, {
                    key: 'className',
                    value: function className() {
                        return " DashboardGraph";
                    }
                }, {
                    key: 'getGraphData',
                    value: function getGraphData() {
                        loadedStuff = true;
                        app.store.find('discussions', {
                            sort: '-startTime',
                            page: {
                                limit: 1
                            }
                        }).then(function (discussion) {
                            discussions = discussion && discussion[0] ? discussion[0].id() : '???';
                            m.redraw();

                            app.store.find('users', {
                                sort: '-joinTime',
                                page: {
                                    limit: 1
                                }
                            }).then(function (user) {

                                users = user.length && user[0] ? user[0].id() : '???';
                                posts = '???';

                                m.redraw();
                            });

                            setTimeout(function () {
                                loadedStuff = false;
                                discussions, users, posts = null;

                                m.redraw();
                            }, Math.round(parseInt(app.forum.attribute('datitisev-dashboard.graph.dataInterval') || '10')) * (60 * 1000));
                        });
                    }
                }, {
                    key: 'graphView',
                    value: function graphView() {

                        return m(
                            'div',
                            { className: 'DashboardGraph--Graph' },
                            Object.keys(months).map(function (id) {
                                var month = months[id];
                                return m(
                                    'div',
                                    { className: 'DashboardGraph--Month' },
                                    m(
                                        'div',
                                        { className: 'bars' },
                                        'BAR'
                                    ),
                                    m(
                                        'div',
                                        { className: 'name' },
                                        month
                                    )
                                );
                            })
                        );
                    }
                }]);
                return DashboardWidgetGraph;
            })(DashboardSection);

            _export('default', DashboardWidgetGraph);
        }
    };
});;
System.register('datitisev/dashboard/components/WidgetVersions', ['flarum/extend', 'flarum/app', 'flarum/components/Button', 'datitisev/dashboard/DashboardSection', 'datitisev/dashboard/components/ExtensionUpdatesModal'], function (_export) {
    'use strict';

    var extend, app, Button, DashboardSection, ExtensionUpdatesModal, DashboardWidgetVersions;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton['default'];
        }, function (_datitisevDashboardDashboardSection) {
            DashboardSection = _datitisevDashboardDashboardSection['default'];
        }, function (_datitisevDashboardComponentsExtensionUpdatesModal) {
            ExtensionUpdatesModal = _datitisevDashboardComponentsExtensionUpdatesModal['default'];
        }],
        execute: function () {
            DashboardWidgetVersions = (function (_DashboardSection) {
                babelHelpers.inherits(DashboardWidgetVersions, _DashboardSection);

                function DashboardWidgetVersions() {
                    babelHelpers.classCallCheck(this, DashboardWidgetVersions);
                    babelHelpers.get(Object.getPrototypeOf(DashboardWidgetVersions.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardWidgetVersions, [{
                    key: 'content',
                    value: function content() {

                        return m(
                            'ul',
                            null,
                            m(
                                'li',
                                null,
                                Button.component({
                                    children: app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.checkUpdates_button'),
                                    className: 'Button Button--primary',
                                    onclick: function onclick() {
                                        app.modal.show(new ExtensionUpdatesModal());
                                    }
                                })
                            ),
                            m(
                                'li',
                                null,
                                app.translator.trans('datitisev-dashboard.admin.dashboard.flarum_version', { version: m(
                                        'strong',
                                        null,
                                        app.forum.attribute('version')
                                    ) })
                            ),
                            m(
                                'li',
                                null,
                                app.translator.trans('datitisev-dashboard.admin.dashboard.php_version', { version: m(
                                        'strong',
                                        null,
                                        app.settings['phpVersion']
                                    ) })
                            )
                        );
                    }
                }, {
                    key: 'className',
                    value: function className() {
                        return " Versions";
                    }
                }]);
                return DashboardWidgetVersions;
            })(DashboardSection);

            _export('default', DashboardWidgetVersions);
        }
    };
});;
System.register('datitisev/dashboard/DashboardSection', ['flarum/extend', 'flarum/Component'], function (_export) {
    'use strict';

    var extend, Component, DashboardSection;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent['default'];
        }],
        execute: function () {
            DashboardSection = (function (_Component) {
                babelHelpers.inherits(DashboardSection, _Component);

                function DashboardSection() {
                    babelHelpers.classCallCheck(this, DashboardSection);
                    babelHelpers.get(Object.getPrototypeOf(DashboardSection.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardSection, [{
                    key: 'init',
                    value: function init() {
                        if (this.config) this.config();
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m(
                            'div',
                            { className: 'DashboardPage--Section ' + (this.className ? this.className() : '') },
                            this.content()
                        );
                    }
                }, {
                    key: 'content',
                    value: function content() {
                        return m(
                            'span',
                            null,
                            'Something'
                        );
                    }
                }]);
                return DashboardSection;
            })(Component);

            _export('default', DashboardSection);
        }
    };
});;
System.register('datitisev/dashboard/main', ['flarum/extend', 'flarum/app', 'datitisev/dashboard/changeDashboardPage', 'datitisev/dashboard/components/DashboardSettingsModal'], function (_export) {
    'use strict';

    var extend, app, changeDashboardPage, DashboardSettingsModal;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_datitisevDashboardChangeDashboardPage) {
            changeDashboardPage = _datitisevDashboardChangeDashboardPage['default'];
        }, function (_datitisevDashboardComponentsDashboardSettingsModal) {
            DashboardSettingsModal = _datitisevDashboardComponentsDashboardSettingsModal['default'];
        }],
        execute: function () {

            app.initializers.add('datitisev/dashboard', function () {

                changeDashboardPage();

                app.extensionSettings['datitisev-dashboard'] = function () {
                    return app.modal.show(new DashboardSettingsModal());
                };
            });
        }
    };
});;
System.register('datitisev/dashboard/components/DashboardGraph', ['flarum/extend', 'flarum/Component', 'flarum/app'], function (_export) {
    'use strict';

    var extend, Component, app, loadedStuff, discussions, users, posts, warning, DashboardGraph;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {
            loadedStuff = false;
            discussions = null;
            users = null;
            posts = null;
            warning = null;

            DashboardGraph = (function (_Component) {
                babelHelpers.inherits(DashboardGraph, _Component);

                function DashboardGraph() {
                    babelHelpers.classCallCheck(this, DashboardGraph);
                    babelHelpers.get(Object.getPrototypeOf(DashboardGraph.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardGraph, [{
                    key: 'init',
                    value: function init() {

                        if (!loadedStuff) this.getGraphData();
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        var months = [app.translator.trans('datitisev-dashboard.admin.dashboard.months.january'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.february'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.march'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.april'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.may'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.june'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.july'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.august'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.september'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.october'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.november'), app.translator.trans('datitisev-dashboard.admin.dashboard.months.december')];

                        return m(
                            'div',
                            { className: 'DashboardGraph' },
                            m(
                                'div',
                                { className: 'DashboardGraph--Categories' },
                                m(
                                    'div',
                                    { className: 'DashboardGraph--Category Category--Users' },
                                    m('span', { className: 'color' }),
                                    app.translator.trans('datitisev-dashboard.admin.dashboard.graph.users'),
                                    m('br', null),
                                    m(
                                        'span',
                                        { className: 'number' },
                                        users ? users : '...'
                                    )
                                ),
                                m(
                                    'div',
                                    { className: 'DashboardGraph--Category Category--Discussions' },
                                    m('span', { className: 'color' }),
                                    app.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions'),
                                    m('br', null),
                                    m(
                                        'span',
                                        { className: 'number' },
                                        discussions ? discussions : '...'
                                    )
                                ),
                                m(
                                    'div',
                                    { className: 'DashboardGraph--Category Category--Posts' },
                                    m('span', { className: 'color' }),
                                    app.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts'),
                                    m('br', null),
                                    m(
                                        'span',
                                        { className: 'number' },
                                        posts ? posts : '...'
                                    )
                                )
                            )
                        );
                    }
                }, {
                    key: 'getGraphData',
                    value: function getGraphData() {

                        loadedStuff = true;

                        app.store.find('discussions', {
                            sort: '-startTime',
                            page: {
                                limit: 1
                            }
                        }).then(function (discussion) {

                            discussions = discussion && discussion[0] ? discussion[0].id() : '???';
                            m.redraw();

                            app.store.find('users', {
                                sort: '-joinTime',
                                page: {
                                    limit: 1
                                }
                            }).then(function (user) {

                                users = user.length && user[0] ? user[0].id() : '???';
                                posts = '???';

                                m.redraw();
                            });

                            setTimeout(function () {
                                loadedStuff = false;
                                discussions, users, posts = null;

                                m.redraw();
                            }, Math.round(parseInt(app.forum.attribute('datitisev-dashboard.graph.dataInterval') || '10')) * (60 * 1000));
                        });
                    }
                }, {
                    key: 'graphView',
                    value: function graphView() {

                        return m(
                            'div',
                            { className: 'DashboardGraph--Graph' },
                            Object.keys(months).map(function (id) {
                                var month = months[id];
                                return m(
                                    'div',
                                    { className: 'DashboardGraph--Month' },
                                    m(
                                        'div',
                                        { className: 'bars' },
                                        'BAR'
                                    ),
                                    m(
                                        'div',
                                        { className: 'name' },
                                        month
                                    )
                                );
                            })
                        );
                    }
                }]);
                return DashboardGraph;
            })(Component);

            _export('default', DashboardGraph);
        }
    };
});