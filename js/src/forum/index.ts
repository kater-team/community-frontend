


import ContainerChange from './ContainerChange';
import DiscussionListItemChange from './DiscussionListItemChange';
import HeaderSecondaryChange from "./HeaderSecondaryChange"

app.initializers.add('kater/community-frontend', () => {
  console.log('[kater/community-frontend] Hello, forum!');

  HeaderSecondaryChange()
  ContainerChange()
  DiscussionListItemChange()

}, -20);