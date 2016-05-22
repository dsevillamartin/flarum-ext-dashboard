import { extend } from 'flarum/extend';
import Component from 'flarum/Component';
import app from 'flarum/app';
import Button from'flarum/components/Button';

import DashboardGraph from 'datitisev/dashboard/components/DashboardGraph';

var error = null;
var solution = null;
var loadedUpdates = false;
var extensionUpdates = 'checking';

export default class DashboardPage extends Component {
    
    init() {

        if (!loadedUpdates) {
            this.getPackagesAndVersions().then(stuff => {
                error, solution = null;
                extensionUpdates = stuff.length;
            }).catch(err => {
                error = err;
                solution = 'Try to put your secret key / token and try again';
                extensionUpdates = ‘error’;
                m.redraw().strategy('all');
            });
        }
    }

    view() {
        return (<div className="DashboardPage">
            <div className="container">
                <h2>{app.translator.trans('core.admin.dashboard.welcome_text')}</h2>
                {new DashboardGraph()}
                <div className="DashboardPage--Versions">
                    <div className={error ? 'DashboardPage--Versions Error ' : 'DashboardPage--Versions Error hidden'}>
                        <b>Github:</b> <i>{error}</i> <br/>
                        {solution}
                    </div>
                    <ul>
                        <li className={extensionUpdates !== 0 && !error ? 'DashboardPage--ExtensionUpdates' : 'DashboardPage--ExtensionUpdates hidden'}>{Button.component({
                            children: (!error) ? (extensionUpdates == 'checking' ? app.translator.trans('datitisev-dashboard.admin.dashboard.checking_updates') : ( extensionUpdates == 0 ? 'No Updates' : app.translator.trans('datitisev-dashboard.admin.dashboard.extension_updates', {number: extensionUpdates}) ) ): app.translator.trans('datitisev-dashboard.admin.dashboard.checking_updates_error'),
                            className: 'Button Button--primary ' + (extensionUpdates == 0 ? 'disabled' : ''),
                            disabled: extensionUpdates == 0,
                            loading: extensionUpdates == 'checking'
                        })}</li>
                        <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.flarum_version', {version: <strong>{app.forum.attribute('version')}</strong>})}</li>
                        <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.php_version', {version: <strong>{app.settings['phpVersion']}</strong>})}</li>
                        <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.mysql_version', {version: <strong>{app.settings['mysqlVersion']}</strong>})}</li>
                    </ul>
                </div>
            </div>
        </div>)
    }


    getPackagesAndVersions() {

        loadedUpdates = true;

        return new Promise((resolve, reject) => {

            const extensions = app.extensions;
            const extensionNames = Object.getOwnPropertyNames(extensions);
            let needsUpdate = [];


            extensionNames.forEach((el, i, o) => {

                if (!extensions[el] || !extensions[el].source) return false;

                let currentExtension = extensions[el];

                let source = currentExtension.source.url.replace('github.com', 'api.github.com/repos');

                if (source.indexOf('github.com') >= 0) {
                    source = 'https://api.github.com/repos/' + currentExtension.name + '/releases';
                    source += '?client_id=' + app.forum.attribute('datitisev-dashboard.github.client_id') + '&client_secret=' + app.forum.attribute('datitisev-dashboard.github.client_secret');
                } else return false;

                this.request({
                    url: source,
                    method: 'GET'
                }).then((data) => {

                    if (data) {
                        let newVersion = (data && data.length) ? data[0].tag_name : null;
                        let version = currentExtension.version;
                        // let version = 'some_other_version';

                        if (newVersion && version != newVersion && version !== 'dev-master' && version != '@dev') {
                            Promise.resolve(needsUpdate.push({
                                name: currentExtension.name,
                                oldVersion: version,
                                newVersion: newVersion
                            })).then(() => {
                                if (o.length - 1 == i) {
                                    resolve(needsUpdate);
                                }
                            })
                        }
                    }

                    if (o.length - 1 == i) {
                        resolve(needsUpdate);
                    }
                }).catch((err) => {

                    let warning = err.message.indexOf('rate limit') >= 0 ? err.message.substr(0, 38) : err.message;

                    reject(warning);
                });
            });
        });
    }


    request(par) {

        return new Promise((resolve, reject) => {

            m.request({
                method: par.method ? par.method : "GET",
                url: par.url
            }).then(resolve).catch(reject);

        });

    }

}