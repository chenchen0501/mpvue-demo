<template>
  <div class="WeiBo">
    <img src="/static/images/weiboresou.png" class="weiboImg"/>
    <p class="line" v-for="(item, index) in weiBoInfo" :key="index">
      <span class="index">{{index + 1}}</span>
      <span class="hotword">{{item.hotword}}</span>
      <span class="hotnum">{{item.hotwordnum}}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weiBoInfo: []
    };
  },
  methods: {
    // 获取微博头条
    getWeiBoNews() {
      let key = this.globalObj.appKey;
      this.$fly
        .get("http://api.tianapi.com/txapi/weibohot/", {
          key
        })
        .then(res => {
          this.weiBoInfo = res.data.newslist;
          console.log("weibo:", res);
        });
    }
  },
  beforeMount() {
    this.getWeiBoNews();
  }
};
</script>
<style lang="less">
.WeiBo {
  .weiboImg {
    height: 310rpx;
    width: 100vw;
  }
  .line {
    height: 64rpx;
    line-height: 64rpx;
    border-bottom: 1px solid rgb(110, 111, 112);
    .index {
      color: red;
      margin-left: 14rpx;
      margin-right: 14rpx;
    }
    .hotword {

    }
    .hotnum {
      color: orange;
      margin-left: 10px;
    }
  }
}
</style>