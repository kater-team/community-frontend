import app from 'flarum/common/app';

import registerWidget from "../widgets/registerWidget";

app.initializers.add('afrux/kater-community-frontend', () => {
  console.log('[frux/kater-community-frontend] Hello, common!');
  registerWidget()
});
