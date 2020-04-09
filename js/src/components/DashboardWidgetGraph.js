import app from 'flarum/app';
import DashboardWidget from 'flarum/components/DashboardWidget';

export default class DashboardWidgetGraph extends DashboardWidget {
    init() {
        super.init();

        this.months = [
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
            app.translator.trans('datitisev-dashboard.admin.dashboard.months.december'),
        ];
    }

    content() {
        const { userCount, discussionCount, postCount } = app.data['datitisev-dashboard.data'];

        return (
            <div className="DashboardGraph--Categories">
                <div className="DashboardGraph--Category Category--Users">
                    <span className="color" />
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.users')}
                    <br />
                    <span className="number">{userCount}</span>
                </div>
                <div className="DashboardGraph--Category Category--Discussions">
                    <span className="color" />
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions')}
                    <br />
                    <span className="number">{discussionCount}</span>
                </div>
                <div className="DashboardGraph--Category Category--Posts">
                    <span className="color" />
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts')}
                    <br />
                    <span className="number">{postCount}</span>
                </div>
            </div>
        );
    }

    className() {
        return 'DashboardGraph';
    }

    graphView() {
        return (
            <div className="DashboardGraph--Graph">
                {Object.keys(this.months).map(id => {
                    const month = months[id];
                    return (
                        <div className="DashboardGraph--Month">
                            <div className="bars">BAR</div>
                            <div className="name">{month}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
