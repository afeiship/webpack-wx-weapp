import { $route } from '#';
import gtbJson from './gtb.json';

nx.Page({
  data: {
    nodes: {
      type: 'element',
      tagName: 'div',
      attrs: {
        class: 'root-container'
      },
      children: [
        {
          type: 'text',
          content: 'AAA',
          attrs: {}
        },
        {
          type: 'element',
          tagName: 'div',
          children: [
            {
              type: 'text',
              content: '\n    Just a test\n    ',
              attrs: {}
            },
            {
              type: 'element',
              tagName: 'strong',
              children: [
                {
                  type: 'text',
                  content: 'Strong text',
                  attrs: {}
                }
              ],
              attrs: {
                style: 'border:1px solid #f00;'
              }
            },
            {
              type: 'element',
              tagName: 'tu-chart',
              children: [],
              attrs: {
                'data-json': 'eyJ0aWQiOiIzMjI3IiwiaXNTdGF0aWMiOmZhbHNlfQ==',
                dataJson: {
                  tid: '3227',
                  isStatic: false
                }
              }
            }
          ],
          attrs: {
            class: 'test-class'
          }
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
