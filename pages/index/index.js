//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgs: [
            '../../images/swiper-bg.jpg',
            '../../images/swiper-bg.jpg',
            '../../images/swiper-bg.jpg',
        ],
        indicatorDots: true,

        navs: [
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
            {img: '../../images/icon-1.jpg', name:'四川', url: ''},
        ],

        message: [
            {name: '2月6号，消息消息消息消息消息消息消息消息消息', url: ''},
            {name: '2月7号，消息消息消息消息消息消息消息消息消息', url: ''},
            {name: '2月8号，消息消息消息消息消息消息消息消息消息', url: ''},
        ],

        recommends: [
            { img: '../../images/icon-1.jpg', name: '恩施双东5日游', price: 888},
            { img: '../../images/icon-1.jpg', name: '恩施双东5日游', price: 888},
            { img: '../../images/icon-1.jpg', name: '恩施双东5日游', price: 888},
            { img: '../../images/icon-1.jpg', name: '恩施双东5日游', price: 888},
            { img: '../../images/icon-1.jpg', name: '恩施双东5日游', price: 888},
            { img: '../../images/icon-1.jpg', name: '恩施双东5日游', price: 888},
        ]
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
  },
    /**
     * 去搜索
     */
  goSearch: function () {
       wx.navigateTo({
           url: '../search/search',
         })
  },
    /**
     * 去商城
     */
    goMall: function () {
      wx.navigateTo({
        url: '../mall/mall'
      })
    },

    /**
     * 去路线详情
     */
    goRouterInfo: function () {
        wx.navigateTo({
          url: '../router/router-info/router-info'
        })
    }
});
