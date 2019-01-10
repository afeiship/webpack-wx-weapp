import NxWeappInteraction from 'next-weapp-interaction';

const WeappInteraction = nx.declare({
  extends: NxWeappInteraction,
  methods: {
    init() {
      ['actions', 'alert', 'confirm', 'modal', 'loading', 'toast'].forEach((item) => {
        nx.set(nx, `wii.${item}`, this[item]);
      });
    }
  }
});

export default WeappInteraction.getInstance();
