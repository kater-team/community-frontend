import app from 'flarum/common/app';

app.initializers.add('kater/community-frontend', () => {
  console.log('[kater/community-frontend] Hello, forum and admin!');
});
