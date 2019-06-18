import { $route } from '#';
import 'next-chunk';
import data from '@/assets/big-data.json';

nx.Page({
  data: {
    logs: [],
    data: [],
    dataString: ''
  },
  methods: {
    back() {
      $route.back();
    },
    onTap() {
      // const data = require('@/assets/big-data.json');
      this.set1();
    },
    set1() {
      console.log('data:->', data);
      console.time('setData1');
      this.setData({ data: data.data }, () => {
        console.timeEnd('setData1');
      });
    },
    set2() {
      // 数据按空间分片去 set
      const list = data.data;
      const datalist = nx.chunk(list, 10);
      datalist.forEach((data) => {
        console.time('setData2');
        this.setData({ data }, () => {
          console.timeEnd('setData2');
        });
      });
    },
    onMsg(e) {
      const page = e.detail.data[0];
      console.log(e);
      $route.to(page);
    }
  },
  lifetimes: {
    load() {
      // console.log('load web page.. ');
    }
  }
});
