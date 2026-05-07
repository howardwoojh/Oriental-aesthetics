class pageActions {
  constructor() {
    const common = new Common(); // 实例化公共方法
    common.setNavAndFooter();
    common.setNavActiveStyle();
    common.goHome(); // 点击logo，跳转到首页
    common.showNav();
  }
}

const action = new pageActions();

