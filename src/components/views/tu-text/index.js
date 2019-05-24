import { $theme } from '#';

nx.Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    // value: {
    //   type: String,
    //   value: ''
    // }
  },
  lifetimes: {
    created() {
      console.log(this);
      console.log('user component created...');
    }
  },
  methods: {}
});
