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
                            }, 50000);
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
});;
System.register('datitisev/dashboard/components/DashboardPage', ['flarum/extend', 'flarum/Component', 'flarum/app', 'datitisev/dashboard/components/DashboardGraph'], function (_export) {
    'use strict';

    var extend, Component, app, DashboardGraph, error, solution, loadedUpdates, DashboardPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_datitisevDashboardComponentsDashboardGraph) {
            DashboardGraph = _datitisevDashboardComponentsDashboardGraph['default'];
        }],
        execute: function () {
            error = null;
            solution = null;
            loadedUpdates = false;

            DashboardPage = (function (_Component) {
                babelHelpers.inherits(DashboardPage, _Component);

                function DashboardPage() {
                    babelHelpers.classCallCheck(this, DashboardPage);
                    babelHelpers.get(Object.getPrototypeOf(DashboardPage.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(DashboardPage, [{
                    key: 'init',
                    value: function init() {

                        if (!loadedUpdates) {
                            console.log(loadedUpdates);
                            this.getPackagesAndVersions().then(function (stuff) {
                                console.log(stuff);
                                error, solution = null;
                            })['catch'](function (err) {
                                error = err;
                                solution = 'Try to put your secret key / token and try again';
                                m.redraw();
                            });
                        }
                    }
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
                                        'div',
                                        { className: error ? 'DashboardPage--Versions Error ' : 'DashboardPage--Versions Error hidden' },
                                        m(
                                            'b',
                                            null,
                                            'Github:'
                                        ),
                                        ' ',
                                        m(
                                            'i',
                                            null,
                                            error
                                        ),
                                        ' ',
                                        m('br', null),
                                        solution
                                    ),
                                    m(
                                        'ul',
                                        null,
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
                                        ),
                                        m(
                                            'li',
                                            null,
                                            app.translator.trans('datitisev-dashboard.admin.dashboard.mysql_version', { version: m(
                                                    'strong',
                                                    null,
                                                    app.settings['mysqlVersion']
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

                                        if (newVersion && version != newVersion && version !== 'dev-master' && version != '@dev') {
                                            needsUpdate.push({
                                                name: currentExtension.name,
                                                oldVersion: version,
                                                newVersion: newVersion
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
                            m('input', { type: 'text', className: 'FormControl', bidi: this.setting('datitisev-dashboard.github.client_secret') })
                        )];
                    }
                }]);
                return DashboardSettingsModal;
            })(SettingsModal);

            _export('default', DashboardSettingsModal);
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
});