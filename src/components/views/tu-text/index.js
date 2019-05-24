import { $theme } from '#';

nx.Component({
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
