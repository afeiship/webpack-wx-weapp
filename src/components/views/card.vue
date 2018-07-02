<style lang="postcss"> <!-- This will enable PostCSS compilation -->
span {
    user-select:none;
    width: 20px;
    display: inline-block;
    text-align: center;
    font-weight: bold;
}
</style>

<template>
    <div>
        <p>
            Clicked: <span>${props.clicks}</span> times.
            Value is <span>${props.value}</span>.
            <button on-click="${() => this._onIncrement()}" title="Add 1">+</button>
            <button on-click="${() => this._onDecrement()}" title="Minus 1">-</button>
        </p>
    </div>
</template>

<script>
  export default{
    config: {
      component: true
    },
    component: {
      properties: {
        avatarUrl: {
          type: String,
          value: 'none'
        },
        nickName: {
          type: String,
          value: '-'
        }
      },
      methods: {
        test1() {
          const { VERSION } = nx;
          console.log('hello');
        }
      }
    }
  };
</script>