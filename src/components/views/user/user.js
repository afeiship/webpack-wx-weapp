nx.Component({
  mixins: ['mixin1','mixin2'],
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
  created() {
    console.log(this, this.test1);
    console.log('created...');
  }
});
