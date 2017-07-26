import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DashboardSection from 'datitisev/dashboard/DashboardSection';

export default class DashboardWidgetGraph extends DashboardSection {

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
                    <span className="number">{app.data.settings['dashboard.userCount']}</span>
                </div>
                <div className="DashboardGraph--Category Category--Discussions">
                    <span className="color"></span>
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions')}<br />
                    <span className="number">{app.data.settings['dashboard.discussionCount']}</span>
                </div>
                <div className="DashboardGraph--Category Category--Posts">
                    <span className="color"></span>
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts')}<br />
                    <span className="number">{app.data.settings['dashboard.postCount']}</span>
                </div>
            </div>)
    }

    className() {
        return "DashboardGraph";
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

