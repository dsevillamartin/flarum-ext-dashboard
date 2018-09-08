import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import FlarumDashboardPage from 'flarum/components/DashboardPage';
import ItemList from 'flarum/utils/ItemList';
import icon from 'flarum/helpers/icon';

import WidgetGraph from './WidgetGraph';
import DashboardExtensionInfoModal from './DashboardExtensionInfoModal';
import DashboardConfigurationModal from './DashboardConfigurationModal';
import AdminNav from "flarum/components/AdminNav";
import ExtensionUpdatesModal from "./ExtensionUpdatesModal";

export default class DashboardPage extends Page {
    init() {
        this.extensions = app.data.extensions;

        super.init();
    }

    view() {
        // const pages = AdminNav.prototype.items();
        // pages.remove('dashboard');
        // pages.remove('extensions');

        return (
            <div className="DashboardPage">
                <div className="container">
                    <div className="DashboardPage--Widgets">
                        {Object.keys(this.items().items)
                            .map(id => {
                                const section = this.items().get(id);
                                if (section) return section;
                            })
                        }
                    </div>

                    <div className="DashboardPageExtensions">
                        <p className="DashboardPageExtensions--Title">
                            <span>
                                {app.translator.trans('core.admin.nav.extensions_button')}
                            </span>

                            {Button.component({
                                children: icon('fas fa-sync'),
                                className: 'Button',
                                onclick: () => app.modal.show(new ExtensionUpdatesModal())
                            })}
                        </p>


                        {Object.keys(this.extensions)
                            .map(id => {
                                let extension = this.extensions[id];
                                return (
                                    <li className="DashboardPageExtensions--Item"
                                        onclick={() => {
                                            app.modal.show(new DashboardExtensionInfoModal({
                                                extension,
                                            }));
                                        }}>
                                        <div className="DashboardExtensionsItem-content">
                                            <spam className="DashboardExtensionsItem-icon" style={extension.icon}>
                                                {extension.icon ? icon(extension.icon.name) : ''}
                                            </spam>
                                            <label className="DashboardExtensionsItem-title">
                                                {extension.extra['flarum-extension'].title}
                                            </label>
                                        </div>
                                    </li>
                                )
                            })}
                    </div>
                </div>
            </div>
        );
    }

    items() {
        const items = new ItemList();

        for (const item of FlarumDashboardPage.prototype.availableWidgets()) {
            if (item.component.name === 'StatisticsWidget') continue;

            items.add(item.component.name, item);
        }

        items.add('countData', <WidgetGraph/>);

        return items;
    }

}
