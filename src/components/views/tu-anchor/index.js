import { $theme } from '#';

nx.Component({
  properties: {
    attrs: {
      type: Object,
      value: {}
    }
  },
  lifetimes: {
    created() {
      console.log('tu-anchor created...');
    }
  },
  methods: {
    onTap() {
      wx.showActionSheet({
        itemList:[
          'item1 action',
          'item2 action'
        ],
        success(res) {
          console.log(res.tapIndex)
        },
      })
    }
  }
});
