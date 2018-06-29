<template>
    <view>
        <text>Hello</text>
    </view>
</template>

<!--SP-->

<script>
  export default {
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
      }
    }
  }
</script>

<!--SP-->

<style>
    body {
        color: #f00;
    }
</style>