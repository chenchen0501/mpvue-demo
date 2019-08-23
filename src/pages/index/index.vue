<template>
  <div>
    <div class="main">
      <img :src="userInfo.avatarUrl" class="avatar" />
      <div class="nickName">{{userInfo.nickName}}</div>
    </div>
    <div class="content">
      <p>地点: {{weatherInfo.country}}&nbsp;{{weatherInfo.city}}</p>
      <p>当前温度: {{weatherInfo.tem}}°C&nbsp;{{weatherInfo.wea}}</p>
      <p>{{weatherInfo.tem1}}°C ~ {{weatherInfo.tem2}}°C</p>
      <div>手机型号：{{phoneInfo.model}}</div>
      <button @click="shake">按摩</button>
      <button @click="phone">联系小可爱</button>
      <button @click="getAddress">查看位置</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {},
      phoneInfo: {},
      loactionInfo: {},
      weatherInfo: {}
    };
  },

  components: {},

  methods: {
    // 打开位置
    getAddress() {
      wx.getLocation({
        type: "gcj02", //返回可以用于wx.openLocation的经纬度
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          wx.openLocation({
            latitude,
            longitude,
            scale: 18
          });
        }
      });
    },
    // 获取位置
    getLocation() {
      let _this = this;
      wx.getLocation({
        type: "wgs84",
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          const speed = res.speed;
          const accuracy = res.accuracy;
          _this.loactionInfo = res;
          console.log("res: ", res);
        }
      });
    },
    phone() {
      wx.makePhoneCall({
        phoneNumber: "18306189208" //仅为示例，并非真实的电话号码
      });
    },
    shake() {
      wx.vibrateLong({
        success() {
          console.log("震动");
        }
      });
    },
    // 获取手机信息
    getPhoneInfo() {
      let _this = this;
      wx.getSystemInfo({
        success(res) {
          _this.phoneInfo = res;
          console.log("phone:", res);
        }
      });
    },
    // 获取用户信息
    getUserInfo() {
      let _this = this;
      wx.getUserInfo({
        success: function(res) {
          _this.userInfo = JSON.parse(res.rawData);
        }
      });
    },
    //天气api
    getapi() {
      this.$fly.get("https://tianqiapi.com/ip/").then(res => {
        this.weathertoday(res.data.ip);
      });
    },
    // 根据ip查询天气
    weathertoday(ip) {
      this.$fly
        .get("https://www.tianqiapi.com/api/?version=v6", {
          ip
        })
        .then(res => {
          this.weatherInfo = res.data;
          console.log("天气情况: ", res);
        });
    }
  },
  watch: {
    userInfo(val) {
      console.log("监测userInfo变化：", this.userInfo);
      console.log("nickName：", this.userInfo.nickName);
    }
  },
  created() {
    this.getLocation();
    this.getUserInfo();
    this.getPhoneInfo();
    this.getapi();
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100px;
  margin: 0 auto;
  .avatar {
    margin-top: 72px;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .nickName {
    margin-top: 28px;
    text-align: center;
  }
}
.content {
  position: fixed;
  bottom: 0;
  width: 100vw;
  text-align: center;
}
</style>
