import { $route } from '#';
nx.Page({
  data: {
    logs: []
  },
  methods: {
    back() {
      $route.back();
    },
    onMsg(e) {
      const page = e.detail.data[0];
      console.log(e);
      $route.to(page);
    }
  },
  lifetimes: {
    load() {
      console.log('load web page.. ');
    }
  }
});
