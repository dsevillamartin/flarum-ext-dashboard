'use strict';

System.register('datitisev/dashboard/changeDashboardPage', ['flarum/extend', 'datitisev/dashboard/components/DashboardPage'], function (_export, _context) {
    "use strict";

    var extend, NewDashboardPage;

    _export('default', function () {

        app.routes.dashboard = { path: '/', component: NewDashboardPage.component() };
    });

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_datitisevDashboardComponentsDashboardPage) {
            NewDashboardPage = _datitisevDashboardComponentsDashboardPage.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('datitisev/dashboard/components/DashboardPage', ['flarum/extend', 'flarum/components/Page', 'flarum/utils/ItemList', 'datitisev/dashboard/components/WidgetGraph', 'datitisev/dashboard/components/WidgetVersions'], function (_export, _context) {
    "use strict";

    var extend, Page, ItemList, WidgetGraph, WidgetVersions, DashboardPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_datitisevDashboardComponentsWidgetGraph) {
            WidgetGraph = _datitisevDashboardComponentsWidgetGraph.default;
        }, function (_datitisevDashboardComponentsWidgetVersions) {
            WidgetVersions = _datitisevDashboardComponentsWidgetVersions.default;
        }],
        execute: function () {
            DashboardPage = function (_Page) {
                babelHelpers.inherits(DashboardPage, _Page);

                function DashboardPage() {
                    babelHelpers.classCallCheck(this, DashboardPage);
                    return babelHelpers.possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).apply(this, arguments));
                }

                babelHelpers.createClass(DashboardPage, [{
                    key: 'view',
                    value: function view() {
                        var _this2 = this;

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
                                Object.keys(this.items().items).map(function (id) {
                                    var section = _this2.items().get(id);
                                    if (section) return new section();
                                })
                            )
                        );
                    }
                }, {
                    key: 'items',
                    value: function items() {
                        var items = new ItemList();

                        items.add('countData', WidgetGraph);
                        items.add('versions', WidgetVersions);

                        return items;
                    }
                }]);
                return DashboardPage;
            }(Page);

            _export('default', DashboardPage);
        }
    };
});;
'use strict';

System.register('datitisev/dashboard/components/DashboardSettingsModal', ['flarum/components/SettingsModal', 'flarum/app'], function (_export, _context) {
    "use strict";

    var SettingsModal, app, DashboardSettingsModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }],
        execute: function () {
            DashboardSettingsModal = function (_SettingsModal) {
                babelHelpers.inherits(DashboardSettingsModal, _SettingsModal);

                function DashboardSettingsModal() {
                    babelHelpers.classCallCheck(this, DashboardSettingsModal);
                    return babelHelpers.possibleConstructorReturn(this, (DashboardSettingsModal.__proto__ || Object.getPrototypeOf(DashboardSettingsModal)).apply(this, arguments));
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
            }(SettingsModal);

            _export('default', DashboardSettingsModal);
        }
    };
});;
'use strict';

System.register('datitisev/dashboard/components/ExtensionUpdatesModal', ['flarum/components/Modal', 'flarum/app'], function (_export, _context) {
    "use strict";

    var Modal, app, ExtensionUpdatesModal;
    return {
        setters: [function (_flarumComponentsModal) {
            Modal = _flarumComponentsModal.default;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }],
        execute: function () {
            ExtensionUpdatesModal = function (_Modal) {
                babelHelpers.inherits(ExtensionUpdatesModal, _Modal);

                function ExtensionUpdatesModal() {
                    babelHelpers.classCallCheck(this, ExtensionUpdatesModal);
                    return babelHelpers.possibleConstructorReturn(this, (ExtensionUpdatesModal.__proto__ || Object.getPrototypeOf(ExtensionUpdatesModal)).apply(this, arguments));
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
                        var _this2 = this;

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
                                        var extension = _this2.needsUpdate[id];
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
                                    m.trust(this.error)
                                ),
                                m(
                                    'p',
                                    null,
                                    m.trust(this.solution)
                                )
                            ),
                            m(
                                'div',
                                { style: this.extensionUpdates == 0 && !this.error && !this.loading ? '' : 'display: none' },
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
                        var _this3 = this;

                        var extensions = app.data.extensions;
                        var extensionNames = Object.keys(extensions);

                        extensionNames.forEach(function (el, i, o) {

                            if (!extensions[el] || !extensions[el].source) return false;

                            var currentExtension = extensions[el];

                            var source = currentExtension.source.url.replace('.git', '').replace('github.com', 'api.github.com/repos');

                            if (source.indexOf('github.com') >= 0) {
                                source = 'https://api.github.com/repos/' + currentExtension.name + '/tags';
                                source += '?client_id=' + app.forum.attribute('datitisev-dashboard.github.client_id') + '&client_secret=' + app.forum.attribute('datitisev-dashboard.github.client_secret');
                            } else return false;

                            _this3.request({
                                url: source,
                                method: 'GET'
                            }).then(function (data) {

                                if (_this3.error) _this3.error = null;

                                if (data) {
                                    var newVersion = data && data.length ? data[0].name : null;
                                    var version = currentExtension.version;
                                    // let version = 'some_other_version';

                                    if (newVersion && version != newVersion && version !== 'dev-master' && version != '@dev') {
                                        _this3.extensionUpdates = _this3.needsUpdate.length + 1;

                                        Promise.resolve(_this3.needsUpdate.push({
                                            name: currentExtension.name,
                                            oldVersion: version,
                                            newVersion: newVersion
                                        })).then(function () {
                                            if (o.length - 1 == i) {
                                                _this3.extensionUpdates = _this3.needsUpdate.length;
                                                _this3.loading = false;
                                                m.redraw();
                                            } else {
                                                m.redraw();
                                            }
                                        }).catch(function (error) {
                                            _this3.error = error;
                                            m.redraw();
                                        });
                                    } else {
                                        _this3.extensionUpdates = _this3.needsUpdate.length;
                                        if (o.length - 1 == i) {
                                            _this3.loading = false;
                                            m.redraw();
                                        } else {
                                            m.redraw();
                                        }
                                    }
                                }
                            }).catch(function (err) {

                                if (!err || (typeof err === 'undefined' ? 'undefined' : babelHelpers.typeof(err)) != 'object' || !err.message) return false;

                                var error = err.message.indexOf('rate limit') >= 0 ? err.message.substr(0, 38) : err.message;
                                if (error == 'Not Found' && o.length - 1 == i) {
                                    _this3.loading = false;
                                    m.redraw();
                                } else if (error == 'Not Found') return false;

                                var solution = err.message.indexOf('rate limit') >= 0 ? app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.addClientIdAndSecret') : '';

                                _this3.error = '<b>GitHub:</b> ' + error;
                                _this3.solution = solution;
                                _this3.loading = false;
                                m.redraw();
                            });
                        });

                        setTimeout(function () {
                            _this3.error = '';
                            _this3.solution = '';
                            _this3.extensionUpdates = 0;
                            _this3.needsUpdate = [];
                            _this3.loading = false;
                            _this3.getPackagesAndVersions();
                            m.redraw();
                        }, 60000);
                    }
                }, {
                    key: 'request',
                    value: function request(par) {

                        return new Promise(function (resolve, reject) {
                            m.request({
                                method: par.method ? par.method : "GET",
                                url: par.url
                            }).then(resolve).catch(reject);
                        });
                    }
                }]);
                return ExtensionUpdatesModal;
            }(Modal);

            _export('default', ExtensionUpdatesModal);
        }
    };
});;
'use strict';

System.register('datitisev/dashboard/components/WidgetGraph', ['flarum/extend', 'flarum/app', 'datitisev/dashboard/DashboardSection'], function (_export, _context) {
    "use strict";

    var extend, app, DashboardSection, loadedStuff, discussions, users, posts, warning, DashboardWidgetGraph;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_datitisevDashboardDashboardSection) {
            DashboardSection = _datitisevDashboardDashboardSection.default;
        }],
        execute: function () {
            loadedStuff = false;
            discussions = null;
            users = null;
            posts = null;
            warning = null;

            DashboardWidgetGraph = function (_DashboardSection) {
                babelHelpers.inherits(DashboardWidgetGraph, _DashboardSection);

                function DashboardWidgetGraph() {
                    babelHelpers.classCallCheck(this, DashboardWidgetGraph);
                    return babelHelpers.possibleConstructorReturn(this, (DashboardWidgetGraph.__proto__ || Object.getPrototypeOf(DashboardWidgetGraph)).apply(this, arguments));
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
                        return "DashboardGraph";
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
            }(DashboardSection);

            _export('default', DashboardWidgetGraph);
        }
    };
});;
'use strict';

System.register('datitisev/dashboard/components/WidgetVersions', ['flarum/extend', 'flarum/app', 'flarum/components/Button', 'datitisev/dashboard/DashboardSection', 'datitisev/dashboard/components/ExtensionUpdatesModal'], function (_export, _context) {
    "use strict";

    var extend, app, Button, DashboardSection, ExtensionUpdatesModal, DashboardWidgetVersions;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_datitisevDashboardDashboardSection) {
            DashboardSection = _datitisevDashboardDashboardSection.default;
        }, function (_datitisevDashboardComponentsExtensionUpdatesModal) {
            ExtensionUpdatesModal = _datitisevDashboardComponentsExtensionUpdatesModal.default;
        }],
        execute: function () {
            DashboardWidgetVersions = function (_DashboardSection) {
                babelHelpers.inherits(DashboardWidgetVersions, _DashboardSection);

                function DashboardWidgetVersions() {
                    babelHelpers.classCallCheck(this, DashboardWidgetVersions);
                    return babelHelpers.possibleConstructorReturn(this, (DashboardWidgetVersions.__proto__ || Object.getPrototypeOf(DashboardWidgetVersions)).apply(this, arguments));
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
                                        app.data.settings['phpVersion']
                                    ) })
                            )
                        );
                    }
                }, {
                    key: 'className',
                    value: function className() {
                        return "Versions";
                    }
                }]);
                return DashboardWidgetVersions;
            }(DashboardSection);

            _export('default', DashboardWidgetVersions);
        }
    };
});;
'use strict';

System.register('datitisev/dashboard/DashboardSection', ['flarum/extend', 'flarum/Component'], function (_export, _context) {
    "use strict";

    var extend, Component, DashboardSection;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent.default;
        }],
        execute: function () {
            DashboardSection = function (_Component) {
                babelHelpers.inherits(DashboardSection, _Component);

                function DashboardSection() {
                    babelHelpers.classCallCheck(this, DashboardSection);
                    return babelHelpers.possibleConstructorReturn(this, (DashboardSection.__proto__ || Object.getPrototypeOf(DashboardSection)).apply(this, arguments));
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
            }(Component);

            _export('default', DashboardSection);
        }
    };
});;
'use strict';

System.register('datitisev/dashboard/main', ['flarum/extend', 'flarum/app', 'datitisev/dashboard/changeDashboardPage', 'datitisev/dashboard/components/DashboardSettingsModal'], function (_export, _context) {
    "use strict";

    var extend, app, changeDashboardPage, DashboardSettingsModal;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_datitisevDashboardChangeDashboardPage) {
            changeDashboardPage = _datitisevDashboardChangeDashboardPage.default;
        }, function (_datitisevDashboardComponentsDashboardSettingsModal) {
            DashboardSettingsModal = _datitisevDashboardComponentsDashboardSettingsModal.default;
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
});