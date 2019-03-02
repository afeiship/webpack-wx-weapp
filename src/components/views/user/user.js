import { $theme } from '#';

nx.Component({
  mixins: ['mixin1', 'mixin2'],
  properties: {
    avatarUrl: {
      type: String,
      value: $theme.get('user.avatarUrl')
    },
    nickName: {
      type: String,
      value: '-'
    }
  },
  lifetimes: {
    created() {
      console.log('user component created...');
    }
  },
  methods: {
    m1() {
      console.log('user. method m1');
    }
  }
});
