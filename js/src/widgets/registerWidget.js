
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import FlarumInfo from './components/FlarumInfo';

import ForumStatsWidget from './components/ForumStatsWidget';
import GuanGao from './components/GuanGao';
import JingPinZhuanti from './components/JingPinZhuanti';
import KanbanTuijian from './components/KanbanTuijian';
import XiangGuanWenZhang from './components/XiangGuanWenZhang';

export default function () {
    new Widgets()
        .add({
            key: 'forumStats',
            component: ForumStatsWidget,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 2,
        })
        .extend(app, 'kater-community-frontend');

    new Widgets()
        .add({
            key: 'jingpinzhuanti',
            component: JingPinZhuanti,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 2,
        })
        .extend(app, 'kater-community-frontend');

    new Widgets()
        .add({
            key: 'xianggaunwenzhang',
            component: XiangGuanWenZhang,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 2,
        })
        .extend(app, 'kater-community-frontend');

    new Widgets()
        .add({
            key: 'guangao',
            component: GuanGao,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 2,
        })
        .extend(app, 'kater-community-frontend');

    new Widgets()
        .add({
            key: 'falruminfo',
            component: FlarumInfo,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 2,
        })
        .extend(app, 'kater-community-frontend');

    new Widgets()
        .add({
            key: 'kanbantuijian',
            component: KanbanTuijian,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 2,
        })
        .extend(app, 'kater-community-frontend');

}
