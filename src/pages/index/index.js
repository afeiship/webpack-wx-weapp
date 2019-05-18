const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
import { $route } from '#';

nx.Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    gData: null,
    auth: {},
    mini: false,
    richText: `<p>少年时，<strong class="tss-bold"><em class="tss-italic">想<span style="background-color:#D96B20" class="tss-background-color">碰到</span></em></strong><span style="background-color:#D96B20" class="tss-background-color">一个聂</span>小倩，<span style="color:#30363d" class="tss-color">拼了性<strong class="tss-bold"><em class="tss-italic"><span style="text-decoration: underline" class="tss-underline">命爱一</span></em></strong>场，天亮前带着<strong class="tss-bold">她的魂魄远走他乡。<br> 青年时，想</strong></span><strong class="tss-bold"><span style="color:#30363d" class="tss-color">碰到一个</span></strong><span style="color:#30363d" class="tss-color"><strong class="tss-bold">白素贞，</strong></span><strong class="tss-bold"><span style="color:#C10200" class="tss-color">家大业大，要啥有啥，吃完软饭一</span></strong><span style="color:#30363d" class="tss-color"><strong class="tss-bold">抹</strong>嘴，<span style="text-decoration: underline" class="tss-underline">还有人负责把她</span>关进雷峰塔。<br> 中年时，想要一个田螺姑娘，温婉可人</span><span style="color:#E01FAD" class="tss-color">，红袖添香</span><span style="color:#30363d" class="tss-color">，半夜写累</span><strong class="tss-bold"><span style="text-decoration: underline" class="tss-underline"><span style="color:#F68030" class="tss-color"><span style="font-size:15px" class="tss-fontsize">了，让她变</span></span></span></strong><span style="color:#30363d" class="tss-color">回</span><span style="color:#FF7100" class="tss-color">原形，加</span><span style="color:#30363d" class="tss-color">干辣椒</span>、花椒、姜、蒜片爆炒，淋入香油，<a href="https://www.mipengine.org/">起锅装盘</a>。</p>`
  },
  // 事件处理函数
  methods: {
    test1() {
      console.log('test1');
      // $route.go('/pages/logs/index')
      $route.to('logs').then((_) => {
        console.log('success go!');
      });
    },
    test2() {
      console.log('set global data');
    },
    toWebs() {
      $route.to('webs');
    },
    showSheet() {
      nx.wx.actions({
        itemList: ['A', 'B', 'C'],
        complete() {
          console.log('sheet complete.');
        }
      });
    }
  },
  lifetimes: {
    load() {
      wx.createIntersectionObserver()
        .relativeTo('.fixed-header')
        .observe('.user-avatar', (res) => {
          console.log('res', res.intersectionRect.top);
          if (res.intersectionRect.top > 0) {
            console.log('collapse!');
            // this.setData({ mini: true });
          } else {
            console.log('expand');
            // this.setData({ mini: false });
          }
          // console.log('trigger!', res.intersectionRatio);

          // res.intersectionRatio; // 相交区域占目标节点的布局区域的比例
          // res.intersectionRect; // 相交区域
          // res.intersectionRect.left; // 相交区域的左边界坐标
          // res.intersectionRect.top; // 相交区域的上边界坐标
          // res.intersectionRect.width; // 相交区域的宽度
          // res.intersectionRect.height; // 相交区域的高度
        });
    }
  }
});
