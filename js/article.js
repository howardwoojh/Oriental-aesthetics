class pageActions {
  constructor() {
    const common = new Common(); // 实例化公共方法
    common.setNavAndFooter();
    common.setNavActiveStyle();
    common.goHome(); // 点击logo，跳转到首页
    common.showNav();
    this.init();
  }

  init() {
    this.getData();
  }

  /**
   * 获取页面数据
   */
  getData() {

    //遍历数据将数据渲染到页面
    data.data.forEach(item => {
      const container = document.querySelector('.content');
      let html = `
          <div class="item">
            <input type="text" style="display:none" name="article" value="${item.id}">
            <div class="img">
              <img src="${item.images[0].url}" alt="">
            </div>
            <div class="info">
              <p class="name">${item.name}</p>
              <p class="article">
                <span>${item.dynasties + '·' + item.name}</span>
                <span>${item.factions}</span>
              </p>
            </div>
          </div>
          `
      container.insertAdjacentHTML('beforeend', html);
      this.addPainingClick();
    })
  }

  /**
   * 给作品添加点击事件
   */
  addPainingClick() {
    const works = document.querySelectorAll('.content .item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/article-details.html?pid=${work.querySelector('input').value}&pagename=page4`;
        window.location.href = url;
      })
    })
  }

}

const action = new pageActions();

