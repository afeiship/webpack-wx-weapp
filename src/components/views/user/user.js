nx.Component({
  mixins: ['mixin1', 'mixin2'],
  properties: {
    avatarUrl: {
      type: String,
      value: 'none'
    },
    nickName: {
      type: String,
      value: '-'
    }
  },
  lifetimes: {
    created() {
      console.log(this, this.test1);
      console.log('user component created...');
    }
  }
});
