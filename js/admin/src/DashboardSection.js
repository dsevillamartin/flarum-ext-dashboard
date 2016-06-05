import { extend } from 'flarum/extend';
import Component from 'flarum/Component';

export default class DashboardSection extends Component {

    init() {
        if (this.config) this.config();
    }

    view() {
        return (
            <div className={'DashboardPage--Section ' + (this.className ? this.className() : '')}>
                {this.content()}
            </div>
        )
    }

    content() {
        return (
            <span>Something</span>
        );
    }

}