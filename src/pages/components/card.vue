<template>
<!-- 单个功能 -->
  <div class="item">{{itemName}}</div>
</template>

<script>
export default {
  props: ["itemName"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.item {
  display: inline-block;
  width: 335rpx;
  height: 335rpx;
  line-height: 335rpx;
  text-align: center;
  background: #6699ff;
  margin: 10px;
}
</style>
