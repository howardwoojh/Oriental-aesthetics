class Common {

  /**
   * 设置导航栏,下拉框和页脚
   */
  setNavAndFooter() {
    const template = new Template(); // 创建一个模板对象
    // 载入导航栏
    document.querySelector('#nav-container').innerHTML = template.navTemplate();
    // 载入页脚
    document.querySelector('footer .container').innerHTML = template.footerTemplate();
  }


  /**
  * 点击按钮定位到指定锚点
  */
  addMoreClick() {
    const more = document.querySelector('.btn-group .btn');
    more.addEventListener('click', () => {
      const targetElement = document.getElementById('introduce');
      if (targetElement) {
        const targetTop = targetElement.offsetTop;
        const offset = 80;
        // 滚动到目标位置减去偏移量的地方  
        window.scrollTo({
          top: targetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  }

  /**
   * 向下滑动200px后，显示导航 通过增加class来显示/隐藏导航条
   */
  showNav() {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav-container');
      if (window.scrollY > 200) {
        nav.classList.add('show-levitating-nav');
        // document.querySelector('.mask-container ').style.background = 'rgba(0, 0, 0, 0.4)';
      } else {
        nav.classList.remove('show-levitating-nav');
        document.querySelector('.mask-container ').style.background = 'none';
      }
    })
  }

  /**
* 设置导航点击后的active样式
*/
  setNavActiveStyle() {
    //设置当前页对应导航样式
    let current_nav_item = this.getUrlParam('pagename');
    //移除所以导航样式
    document.querySelectorAll('nav ul li').forEach((item) => {
      item.classList.remove('nav-active');
    })
    if (current_nav_item) {
      document.querySelector(`.${current_nav_item}`).classList.add('nav-active');
    }
  }

  /**
   * 获取浏览器参数值
   * @param {*} name 
   * @returns 
   */
  getUrlParam(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get(name);
    return param;
  }

  /**
   * 点击logo，跳转到首页
   */
  goHome() {
    document.getElementById('logo').addEventListener('click', () => {
      window.location.href = '../pages/index.html';
    })
  }

}