class pageActions {
  constructor() {
    const common = new Common(); // 实例化公共方法
    common.setNavAndFooter();
    common.setNavActiveStyle();
    common.goHome(); // 点击logo，跳转到首页
    common.showNav();
    this.init();
    common.addMoreClick();
  }

  /**
   * 初始化
   */
  init() {
    this.getData();
  }

  /**
   * 根据url参数获取数据并渲染到页面
   */
  getData() {
    const common = new Common();
    const params = common.getUrlParam('pid');
    const resdata = data.data.find(item => item.id == params * 1);
    document.querySelector('.schools-container .img img').src = resdata.images[0].url;
    document.querySelector('.details .content .title').innerText = resdata.name;
    document.querySelector('.details .content .info').innerText = resdata.intro;
    document.querySelector('.introduce .detail').innerText = resdata.content;
    //渲染作者的其它作品
    const otherListContainer = document.querySelector('.recommend .list');
    let list = resdata;
    list.images.forEach((item, index) => {
      otherListContainer.innerHTML += `
          <div class="item">
            <input type="hidden" value="${resdata.id}">
            <img src="${item.url}" alt="">
            <div class="content-box">
              <div class="detail">
                <h2>${item.name}</h2>
                <p>${item.author + '·' + item.name}</p>
              </div>
            </div>
        </div>
        `;
    })
    this.addPainingClick();
    //渲染流派代表作家
    const authorsListContainer = document.querySelector('.article .list');
    list.articles.forEach((item, index) => {
      authorsListContainer.innerHTML += `
          <div class="item">
            ${item.name}
          </div>
          `;
    })
  }

  /**
   * 给推荐作品添加点击事件
   */
  addPainingClick() {
    const works = document.querySelectorAll('.recommend .list .item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const pid = Math.floor(Math.random() * 18) + 1;
        const url = `../pages/paining-details.html?pid=${pid}`;
        window.location.href = url;
      })
    })
  }

}

new pageActions();

