import { $theme } from '#';

nx.Component({
  properties: {
    src: {
      type: String,
      value: 'http://avatar.chsword.net/avatar/1'
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
    },
    onTap() {
      wx.previewImage({
        current:
          'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
        urls: [
          'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
          'https://via.placeholder.com/200'
        ]
      });
      console.log('on tap!');
    }
  }
});
