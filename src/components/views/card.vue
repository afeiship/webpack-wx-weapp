<template>
    <view>
        <text>Hello</text>
    </view>
</template>

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

<style>
    body {
        color: #f00;
    }
</style>
