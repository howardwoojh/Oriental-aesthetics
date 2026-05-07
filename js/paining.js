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
    data.data.forEach(item => {
      const container = document.querySelector('.content');
      let html = `
          <div class="item">
            <div class="img">
              <img src="${item.image}" alt="">
            </div>
            <div class="info">
              <p class="name">${item.name}</p>
              <p class="article">
                <span>${item.dynasties + '·' + item.author}</span>
                <span>${item.size}</span>
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
    console.log(works);
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/paining-details.html?pid=${index + 1}&pagename=page2`;
        window.location.href = url;
      })
    })
  }

}

const action = new pageActions();

