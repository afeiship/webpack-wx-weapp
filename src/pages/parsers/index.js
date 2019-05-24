import { $route } from '#';
nx.Page({
  data: {
    nodes: {
      type: 'element',
      tagName: 'section',
      children: [
        {
          type: 'element',
          tagName: 'div',
          attributes: {
            style: 'height:10rpx;width: 20rpx; border:1px solid #f00;'
          },
          children: [
            {
              type: 'element',
              tagName: 'tu-audio',
              attributes: {
                class: 'wp-audio',
                src:
                  'https://tsscdn.finxos.com/tu-resources/xlsfile/media/1.mp3'
              }
            },
            {
              type: 'element',
              tagName: 'img',
              attributes: {
                src: 'https://via.placeholder.com/200x100',
                class: 'image'
              }
            },
            {
              type: 'text',
              content: 'I am text'
            },
            {
              type: 'element',
              tagName: 'tu-chart'
            }
          ]
        },
        {
          type: 'element',
          tagName: 'tu-image',
          attributes: {
            src: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
          }
        },
        {
          type: 'element',
          tagName: 'br'
        },
        {
          type: 'text',
          content: 'Just another text!!!'
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
