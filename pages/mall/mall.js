// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      mallList: [
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费','成团保障'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费','成团保障','温泉体验'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '陆地太空舱 + 灵秀温泉',
              price: '9999'
          },
          {
              img: '../../images/icon-1.jpg',
              title: '最后一个西藏桃花节双卧11日',
              hot: '热卖',
              tag: ['无自费'],
              date: '3 月 5/10/12 日',
              detail: '最后一个陆地太空舱 + 灵秀温泉',
              price: '9999'
          }
      ]

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
     * 去路线详情
     */
    goRouterInfo: function () {
        wx.navigateTo({
            url: '../router/router-info/router-info'
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})