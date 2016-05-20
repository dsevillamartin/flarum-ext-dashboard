System.register('datitisev/dashboard/changeDashboardPage', ['flarum/extend', 'flarum/components/DashboardPage', 'flarum/app', 'datitisev/dashboard/components/DashboardGraph'], function (_export) {
    'use strict';

    var extend, DashboardPage, app, DashboardGraph;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsDashboardPage) {
            DashboardPage = _flarumComponentsDashboardPage['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_datitisevDashboardComponentsDashboardGraph) {
            DashboardGraph = _datitisevDashboardComponentsDashboardGraph['default'];
        }],
        execute: function () {
            _export('default', function () {

                DashboardPage.prototype.view = function () {

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
                                { className: 'versions' },
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
                };
            });
        }
    };
});;
System.register('datitisev/dashboard/components/DashboardGraph', ['flarum/extend', 'flarum/Component', 'flarum/app'], function (_export) {
    'use strict';

    var extend, Component, app, loadedStuff, discussions, users, posts, DashboardGraph;
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
System.register('datitisev/dashboard/main', ['flarum/extend', 'flarum/app', 'datitisev/dashboard/changeDashboardPage'], function (_export) {
    'use strict';

    var extend, app, changeDashboardPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_datitisevDashboardChangeDashboardPage) {
            changeDashboardPage = _datitisevDashboardChangeDashboardPage['default'];
        }],
        execute: function () {

            app.initializers.add('datitisev/dashboard', function () {

                changeDashboardPage();
            });
        }
    };
});