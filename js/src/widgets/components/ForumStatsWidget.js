import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';
import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';

export default class ForumStatsWidgetWidget extends Widget {
    className() {
        return 'Afrux-ForumStatsWidgetWidget';
    }

    icon() {
        return 'fas fa-chart-pie';
    }

    title() {
        return "测试使用";
    }

    content() {
        return (
            <div className="Afrux-ForumStatsWidget-grid">
                22222
            </div>
        );
    }
}
