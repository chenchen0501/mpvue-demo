<template>
  <div class="allTypes">
    <div
      @click="toExactType"
      v-for="(item, index) in typeArr"
      :key="index"
      class="item"
    >{{item.name}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      typeArr: [
        { id: 1, name: "微博头条" },
        { id: 2, name: "星座运势" },
        { id: 3, name: "公交早知道" },
        { id: 4, name: "天气预报" }
      ]
    };
  },
  methods: {
    toExactType() {
      wx.navigateTo({
        url: "../weiboNew/main"
      });
    }
  },
  created() {}
};
</script>

<style lang="less">
.allTypes {
  background: #eaeaea;
  .item {
    display: inline-block;
    width: 335rpx;
    height: 335rpx;
    line-height: 335rpx;
    text-align: center;
    background: #6699ff;
    margin: 10px;
  }
}
</style>
