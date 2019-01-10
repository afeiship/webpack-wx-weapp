nx.Component({
  properties: {
    innerText: {
      type: String,
      value: 'default(computed test) value'
    },
    img: {
      type: String,
      value: require('images/face.png')
    },
    className: {
      type: String,
      value: 'cRed'
    }
  },
  computed: {
    b() {
      // 计算属性同样挂在 data 上，每当进行 setData 的时候会重新计算
      // 比如此字段可以通过 this.data.b 获取到
      return this.data.a + 'comp_value';
    }
  },
  data: {
    a: 0
  },
  methods: {
    m1() {
      console.log('avatar metod1');
    },
    test1() {
      console.log('test1 tap');
      this.setData({
        a: ++this.data.a
      });
    }
  }
});
