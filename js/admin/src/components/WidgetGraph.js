import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DashboardSection from 'datitisev/dashboard/DashboardSection';

var loadedStuff = false;
var discussions = null;
var users = null;
var posts = null;
var warning = null;

export default class DashboardWidgetGraph extends DashboardSection {

    config() {
        if (!loadedStuff) this.getGraphData();
    }

    content() {
        const months = [
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.january'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.february'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.march'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.april'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.may'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.june'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.july'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.august'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.september'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.october'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.november'),
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.december')
        ];

        return (<div className="DashboardGraph--Categories">
                <div className="DashboardGraph--Category Category--Users">
                    <span className="color"></span>
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.users')}<br />
                    <span className="number">{users ? users : '...'}</span>
                </div>
                <div className="DashboardGraph--Category Category--Discussions">
                    <span className="color"></span>
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions')}<br />
                    <span className="number">{discussions ? discussions : '...'}</span>
                </div>
                <div className="DashboardGraph--Category Category--Posts">
                    <span className="color"></span>
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts')}<br />
                    <span className="number">{posts ? posts : '...'}</span>
                </div>
            </div>)
    }

    className() {
        return " DashboardGraph";
    }

    getGraphData() {
        loadedStuff = true;
        app.store.find('discussions', {
            sort: '-startTime',
            page: {
                limit: 1
            }
        }).then(discussion => {
            discussions = (discussion && discussion[0]) ? discussion[0].id() : '???';
            m.redraw();

            app.store.find('users', {
                sort: '-joinTime',
                page: {
                    limit: 1
                }
            }).then(user => {

                users = (user.length && user[0]) ? user[0].id() : '???';
                posts = '???';


                m.redraw();

            });
            
            setTimeout(() => {
                loadedStuff = false;
                discussions, users, posts = null;

                m.redraw();

            }, Math.round(parseInt(app.forum.attribute('datitisev-dashboard.graph.dataInterval') || '10')) * (60 * 1000));
        });

    }

    graphView() {

        return (
            <div className="DashboardGraph--Graph">
                {Object.keys(months)
                    .map(id => {
                            const month = months[id];
                            return <div className="DashboardGraph--Month">
                                <div className="bars">
                                    BAR
                                </div>
                                <div className="name">
                                    {month}
                                </div>
                            </div>
                        }
                    )}


            </div>
        )

    }

}

