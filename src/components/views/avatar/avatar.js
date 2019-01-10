nx.Component({
  properties: {
    innerText: {
      type: String,
      value: 'default value'
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
  methods: {
    m1() {
      console.log('avatar metod1');
    }
  }
});
