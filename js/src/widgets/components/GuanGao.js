

// 相关文章

import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';
import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';

export default class GuanGao extends Widget {
    className() {
        return 'Kater-guangao';
    }

    icon() {
        return null;
        return 'fas fa-chart-pie';
    }

    title() {
        return "广告区域";
    }

    content() {
        return (
            <div>
                广告
                <div class="Dropdown-separator"></div>
            </div>
        );
    }
}