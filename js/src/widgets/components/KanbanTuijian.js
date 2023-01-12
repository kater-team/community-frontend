

// 相关文章

import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';
import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';

export default class KanbanTuijian extends Widget {
    className() {
        return 'Kater-kanbantuijian';
    }

    icon() {
        return null;
    }

    title() {
        return null;
    }

    content() {
        return (
            <div>
                看板推荐
                <div class="Dropdown-separator"></div>
            </div>
        );
    }
}