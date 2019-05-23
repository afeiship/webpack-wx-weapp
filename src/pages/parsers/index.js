import { $route } from '#';
nx.Page({
  data: {
    imageData: {
      type: 'element',
      tagName: 'img',
      attributes: {
        src:
          'https://developers.weixin.qq.com/miniprogram/assets/images/head_global_z_@2.png',
        class: 'image'
      }
    },
    audioData: {
      attributes: {
        class: 'wp-audio',
        src: 'https://tsscdn.finxos.com/tu-resources/xlsfile/media/1.mp3'
      }
    },
    nodes: {
      tagName: 'root',
      children: [
        {
          type: 'element',
          tagName: 'div',
          attributes: {
            style: 'height:10rpx;width: 20rpx;'
          },
          children: [
            {
              type: 'element',
              tagName: 'img',
              attributes: {
                src: 'http://xxx.jpg',
                class: 'image'
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    back() {
      $route.back();
    }
  },
  lifetimes: {
    load() {
      console.log('load parsers page!!!');
    }
  }
});
