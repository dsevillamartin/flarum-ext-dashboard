import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import ItemList from 'flarum/utils/ItemList';

import WidgetGraph from 'datitisev/dashboard/components/WidgetGraph';
import WidgetVersions from 'datitisev/dashboard/components/WidgetVersions';

export default class DashboardPage extends Page {
    
    view() {
        return (
            <div className="DashboardPage">
                <div className="container">
                    <h2>{app.translator.trans('core.admin.dashboard.welcome_text')}</h2>

                    {Object.keys(this.items().items)
                        .map(id => {
                            const section = this.items().get(id);
                            if (section) return new section;
                        })
                    }
                </div>
            </div>
        );
    }

    items() {
        const items = new ItemList();
        
        items.add('countData', WidgetGraph);
        items.add('versions', WidgetVersions);

        return items;
    }
    
}
