/**
 * Created by qiheng on 2017/4/23.
 * api 接口
 */

//import axios from 'axios';

export default {
    index               : '/index', // 首页
    getareabylonglat    : '/getareabylonglat', // 逆地址解析
    sendcodeByRegist    : '/sendcode', // 注册时发送验证码
    register            : '/out/register', // 注册
    goodsview           : '/goodsview', // 获取该商品的详情
    deleteGoodsPic      : '/manage/deleteGoodsPic', // 删除图片
    editGoodsDetail     : '/manage/editGoodsDetail', // 编辑商品
    updateGoodsPicSummary : '/manage/updateGoodsPicSummary', // 修改商品图片描述
    shopbalancelist     : '/manage/shopbalancelist', // 获取余额列表
    goodscategorylist   : '/manage/goodscategorylist', // 获取商品分类列表
    serviceformatlist   : '/manage/serviceformatlist', // 记件单位
    goodsDepotPicList   : '/manage/goodsDepotPicList', // 商品库图片展示
    deleteShopManager   : '/manage/deleteShopManager', // 移除店铺管理员
    updateuserpriv      : '/manage/updateuserpriv', // 编辑用户店铺管理权限
    deleteshopslide     : '/manage/deleteshopslide', // 店铺管理-删除幻灯片
    setshopslide        : '/manage/setshopslide', //  店铺管理-批量设置图片为封面
    delshopslide        : '/manage/delshopslide', // 店铺管理-批量取消封面
    addshopmanager      : '/manage/addshopmanager', // 添加店铺管理员
    updateservicer      : '/manage/updateservicer', // 更新店铺管理员
    addservicer         : '/manage/addservicer', //  增加服务人员
    delservicer         : '/manage/delservicer', //  删除服务人员
    confirmordersbycode : '/manage/confirmordersbycode', //  店家扫码支付
    setsendprice        : '/manage/setsendprice', //  设置外送费
    updategoodscategory : '/manage/updategoodscategory', //  店铺管理-编辑商品分类
    deletegoodscategory : '/manage/deletegoodscategory', // 店铺管理-删除商品分类
    addgoodscategory    : '/manage/addgoodscategory',  // 店铺管理-新增商品分类
    undergoods          : '/manage/undergoods',   // 下架商品
    normalgoods         : '/manage/normalgoods',  // 上架商品
    goodslist           : '/manage/goodslist',  // 获取商品列表
    deletegoods         : '/manage/deletegoods',  // 删除商品
    goodsdepotcategorylist : '/manage/goodsdepotcategorylist',  // 商品库分类
    goodsdepotlist      : '/manage/goodsdepotlist',  // 商品库商品
    goodsdepotsearch    : '/manage/goodsdepotsearch',  // 店铺管理-商品库商品搜索
    orderslist          : '/manage/orderslist',  // 订单
    ordersview          : '/manage/ordersview',  // 订单管理详情
    sendorders          : '/manage/sendorders',  // 店铺管理-发货(待服务)
    refundorders        : '/manage/refundorders',  // 店铺管理-同意退款
    refundrefuseorders  : '/manage/refundrefuseorders',  // 店铺管理-拒绝退款
    setsales            : '/manage/setsales',  // 设置促销信息
    getsales            : '/manage/getsales',  // 获取促销活动列表
    deletesales         : '/manage/deletesales',  // 删除促销活动
    creategoods         : '/manage/creategoods',  // 删添加商品
    updategoods         : '/manage/updategoods', //编辑商品
    addsales            : '/manage/addsales',  // 添加促销活动
    addgoodstosales     : '/manage/addgoodstosales',  // 添加商品至促销
    deletegoodstosales  : '/manage/deletegoodstosales',  // 删除促销中的商品
    goodsforsales       : '/manage/goodsforsales',  // 可以添加至促销的商品
    updatesales         : '/manage/updatesales',  // 添加促销活动
    delnewgoods         : '/manage/delnewgoods',  // 移除新品推荐商品
    delgoodssales       : '/manage/delgoodssales',  // 移除限时折扣
    delsalesprice       : '/manage/delsalesprice',  // 移除N元专区
    delsalessend        : '/manage/delsalessend',  // 移除买一送一
    setnewgoods         : '/manage/setnewgoods',  //添加新品推荐商品
    setgoodssales       : '/manage/setgoodssales',  //添加限时折扣商品
    setsalesprice       : '/manage/setsalesprice',  // N元专区商品
    setsalessend        : '/manage/setsalessend',  // 买一送一商品
    manageIndex         : '/manage/index',  // 店铺管理首页
    updateshopnotice    : '/manage/updateshopnotice',  // 编辑促销信息
    delshopnotice       : '/manage/delshopnotice',  // 删除促销信息
    manageSeterrorlist  : '/manage/seterrorlist',  // 纠错列表
    getgrade            : '/manage/getgrade',  // 获取积分
    addshopnotice       : '/manage/addshopnotice',  // 添加促销信息
    searchorders        : '/manage/searchorders',  // 搜索订单
    updateUserShopPrivRel : '/manage/updateUserShopPrivRel',  // 修改店铺管理员权限管理
    setshopattribute    : '/manage/setshopattribute',  // 店铺管理员权限管理
    setshopclassandcategory : '/manage/setshopclassandcategory',  // 店铺设置 - 分组/分类
    shopmanagerlist     : '/manage/shopmanagerlist',  // 店铺管理员列表
    sendcodebyaddshopmanager : '/manage/sendcodebyaddshopmanager',  // 添加店铺管理员时发送验证码
    eIndex              : '/e/index',  // 个人中心首页
    banklist            : '/e/banklist',  // 添加银行卡
    savebankcard        : '/e/savebankcard',  // 获取银行列表
    changephone         : '/e/changephone',  // 修改手机号
    createshop          : '/e/createshop',  // 收藏活动
    favorityactivity    : '/e/favorityactivity',  // 收藏活动2
    myjoinactivity      : '/e/myjoinactivity',  // 我参与的活动
    myfavorityactivity  : '/e/myfavorityactivity',  // 参与的活动
    eOrderslist         : '/e/orderslist',  // 获取订单信息数据
    refundreasonlist    : '/e/refundreasonlist',  // 获取退款理由
    cancelorders        : '/e/cancelorders',  // 取消订单
    eRefundorders       : '/e/refundorders',  // 退款申请
    confirmorders       : '/e/confirmorders',  // 确认服务
    eOrdersview         : '/e/ordersview',  // 订单详情
    addresslist         : '/e/addresslist',  // 加载地址列表
    deladdress          : '/e/deladdress',  // 删除收货地址
    setaddressdefault   : '/e/setaddressdefault',  // 设置默认地址
    myfavorityshop      : '/e/myfavorityshop',  // 我的收藏-店铺
    messagelist         : '/e/messagelist',  // 获取消息
    delmessage          : '/e/delmessage',  // 删除消息数据
    recommendlist       : '/e/recommendlist',  // 获取推荐列表
    share               : '/share',  // 分享
    recommendtodaygoods : '/e/recommendtodaygoods',  // 获取每日推荐数据
    phoneloglist        : '/e/phoneloglist',  // 获取拨号记录
    delphonelog         : '/e/delphonelog',  // 删除拨号数据
    opinion             : '/e/opinion',  // 意见反馈
    signinpage          : '/e/signinpage',  // 积分签到
    signin              : '/e/signin',  // 签到
    scorelog            : '/e/scorelog',  // 积分记录
    couponlist          : '/e/couponlist',  // 优惠券列表
    setorder            : '/e/setorder',  // 生成订单
    createorder         : '/e/createorder',  // 确认订单
    usescore            : '/e/usescore',  // 积分兑换
    getUserScore        : '/e/getUserScore',  // 获取用户积分和积分比率
    getaddress          : '/e/getaddress',  // 获取该地址数据
    updateaddress       : '/e/updateaddress',  // 修改收货地址
    changeUsersAddress  : '/e/changeUsersAddress',  // 编辑用户地址(省市区)
    balancepay          : '/e/balancepay',  // 余额支付
    activity2balancepay : '/e/activity2balancepay',  // 活动-余额支付
    mymoney             : '/e/mymoney',  // 余额支付
    wxpay               : '/e/wxpay',  // 微信支付
    recharge2wxpay      : '/e/recharge2wxpay',  // 钱包充值-微信充值
    activity2wxpay      : '/e/activity2wxpay',  // 活动-微信支付
    sendarrivepay       : '/e/sendarrivepay',  // 货到付款
    setshopfavo         : '/e/setshopfavo',  // 收藏店铺
    activitysetorders   : '/e/activitysetorders',  // 活动订单
    activitycreateorders : '/e/activitycreateorders',  // 生成活动订单
    saveaddress         : '/e/saveaddress',  // 新增收货地址
    changePasswordForShopManager : '/e/changePasswordForShopManager',  // 编辑店铺管理员
    sendcodebychangephone1 : '/e/sendcodebychangephone1',  // 发送验证码-更换手机step1
    sendcodebychangephone2 : '/e/sendcodebychangephone2',  // 发送验证码-更换手机step2
    servicerview        : '/servicerview',  // 获取服务人员详情
    servicerlist        : '/servicerlist',  // 服务人员列表
    logisticslist       : '/logisticslist',  // 店铺物流列表
    deletelogistics     : '/manage/deletelogistics',  // 删除物流
    updatelogistics     : '/manage/updatelogistics',  // 修改物流
    addlogistics        : '/manage/addlogistics',  // 添加物流
    shopslidelist       : '/shopslidelist',  // 店铺管理-店铺幻灯片列表
    shopnoticelist      : '/shopnoticelist',  // 促销信息列表
    getshopnotice       : '/getshopnotice',  // 促销信息详情
    shopPrivListAll     : '/shopPrivListAll',  // 获取店铺管理员权限列表
    activityview        : '/activityview',  // 获取活动列表
    beforeactivity      : '/beforeactivity',  // 往期活动
    huafei2wxpay        : '/huafei2wxpay',  // 话费充值 - 微信支付
    activitylist        : '/activitylist',  // 获取活动列表
    getgoodslistbycategory : '/getgoodslistbycategory',  // 根据分类ID获取商品列表
    getgoodslistforservice : '/getgoodslistforservice',  // 获取服务类店铺详情中的服务列表
    theuser             : '/e/theuser',  // 获取当前用户信息
    changeusername      : '/e/changeusername',  // 修改用户名
    bankcardlist        : '/e/bankcardlist',  // 获取银行卡列表
    withdraw            : '/e/withdraw',  // 提现
    moneyloglist        : '/e/moneyloglist',  // 余额变动
    changepassword      : '/e/changepassword',  // 修改登录密码
    issetpasswordpay    : '/e/issetpasswordpay',  // 是否设置过支付密码
    changepasswordpay   : '/e/changepasswordpay',  // 设置支付密码
    convertcoupon       : '/e/convertcoupon',  // 兑换优惠券
    getrange            : '/e/getrange',  // 获取服务范围
    getshopclasslist    : '/getshopclasslist',  // 获取分组
    unsetbankcard       : '/e/unsetbankcard',  // 解绑银行卡
    logout              : '/e/logout', // 退出
    setpasswordpay1     : '/e/setpasswordpay1', // 修改/设置支付密码1
    setpasswordpay2     : '/e/setpasswordpay2', // 修改/设置支付密码2
    commentorders       : '/e/commentorders', // 评价订单
    sendcodebychangepassword : '/e/sendcodebychangepassword', // 修改密码发送验证码
    changepassword1     : '/e/changepassword1', // 修改密码步骤1
    changepassword2     : '/e/changepassword2', // 修改密码步骤2
    salecategory        : '/salecategory', // 促销页分类
    salegoods           : '/salegoods', // 促销商品列表
    salespage           : '/salespage', // 活动列表页
    promotionModel      : '/promotionModel', // 商品详情
    noticelist          : '/noticelist', // 公告列表
    getnotice           : '/getnotice', // 公告
    getshopcategorylist : '/getshopcategorylist', // 获取分类数据
    shoplist            : '/shoplist', // 获取店铺列表数据
    hotsearch           : '/hotsearch', // 热门搜索
    searchshopbyname    : '/searchshopbyname', // 主页过来的搜索
    searchgoodsbyname   : '/searchgoodsbyname', // 关注过来的搜索
    searchsalesbyname   : '/searchsalesbyname', // 促销过来的搜索
    searchshopbynamefordef : '/searchshopbynamefordef', // 综合商城店铺过来的搜索
    //searchshopbyname    : '/searchshopbyname', // 搜索店铺
    searchshopbynameforservice : '/searchshopbynameforservice', // 上门服务店铺过来的搜索
    infosearch          : '/infosearch', // 本地通过来的搜索
    goodscomment        : '/goodscomment', // 商品评价列表
    shopcommentlist     : '/shopcommentlist', // 店铺评价列表
    phonelog            : '/phonelog', // 拨号记录
    seterrorlist        : '/e/seterrorlist', // 纠错列表
    seterror            : '/e/seterror', // 记录纠错动作
    shopview            : '/shopview', // 店铺详情数据
    validatecode        : '/validatecode', // 验证手机号码
    sitephone           : '/sitephone', // 客服电话号
    getgoodslistbysalesid : 'getgoodslistbysalesid', // 活动获取商品列表
    choiceness            : '/choiceness', // 精选页
    sendcodeByChangePhone : '/sendcodeByChangePhone', // 发送验证码 2017-1-3更换了短信发送接口
    forgetpassword      : '/out/forgetpassword', // 找回密码
    login               : '/out/login', // 登录
    telquery            : '/bianmin/telquery', // 话费充值 - 查询充值金额
    createhuafeiorders  : '/bianmin/createhuafeiorders', // 话费充值 - 创建订单
    infolist            : '/infolist', // 本地通列表
    infocategorylist    : '/infocategorylist', // 本地通分类列表
    infoview            : '/infoview', // 本地通详情
    registerpage        : '/registerpage', // 注册协议
    aboutus             : '/aboutus', // 关于我们
    bankcardpage        : '/bankcardpage', // 银行卡支付协议
    getarea             : '/getarea', // 获得地区
    forgetpasswordstep1 : '/out/forgetpasswordstep1', // 忘记密码第1步
    forgetpasswordstep2 : '/out/forgetpasswordstep2', // 忘记密码第2步
    wxCheckPhone        : '/out/wxCheckPhone', // 微信端查验手机是否注册
    shareScore          : '/shareScore', // 用户分享获取积分
    sitecategory        : '/sitecategory', // 分类
    getcitys            : '/getcitys', // 获取所有城市
    choiceness   : '/choiceness', // 精选
}


