import { $theme } from '#';

nx.Component({
  properties: {
    dataStr: {
      type: String,
      value: ''
    },
    dataJson: {
      type: Object,
      value: {}
    }
  },
  lifetimes: {
    created() {
      console.log('tu-chart component created...');
    }
  },
  methods: {
    m1() {
      console.log('user. method m1');
    },
    onTap() {
      console.log(this, this.data)
      this.setData({
        dataStr: JSON.stringify(this.data.dataJson, null, 2)
      });
    }
  }
});
