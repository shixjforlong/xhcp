// pages/cook/cook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var array = this.initData();
    this.setData({
      array: array
    });
  },
  initData:function(){
    var array=[];
    var obj1 = new Object();
    obj1.img="../images/list/food-1.jpg";
    obj1.title="爱心早餐";
    obj1.type="健康养生";
    obj1.liulan="20696浏览";
    obj1.pinglun="7评论";
    array[0] = obj1;

    var obj2 = new Object();
    obj2.img = "../images/list/food-2.jpg";
    obj2.title = "困了只想喝咖啡";
    obj2.type = "家庭医生在线";
    obj2.liulan = "29628浏览";
    obj2.pinglun = "13评论";
    array[1] = obj2;

    var obj3 = new Object();
    obj3.img = "../images/list/food-3.jpg";
    obj3.title = "橘子吃多变小黄人";
    obj3.type = "家庭医生在线";
    obj3.liulan = "19585浏览";
    obj3.pinglun = "6评论";
    array[2] = obj3;

    return array;
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