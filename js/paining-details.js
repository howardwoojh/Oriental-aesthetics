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
    document.querySelector('.paining-container .img img').src = resdata.image;
    document.querySelector('.details .content .title').innerText = resdata.name;
    document.querySelector('.details .content .info').innerText = resdata.dynasties + '·' + resdata.author + '·' + resdata.size + '·' + resdata.place;
    document.querySelector('.introduce .detail').innerText = resdata.intro;
    //随机渲染四个推荐卡片
    const recommend = document.querySelector('.recommend .list');
    const recommendList = data.data.filter(item => item.id != params * 1);
    recommendList.sort(() => Math.random() - 0.5);
    recommendList.slice(0, 4).forEach(item => {
      recommend.innerHTML += `
          <div class="item">
            <input type="hidden" value="${item.id}">
            <img src="${item.image}" alt="">
            <div class="content-box">
              <div class="detail">
                <h2>${item.name}</h2>
                <p>${item.dynasties + '·' + item.author}</p>
              </div>
            </div>
        </div>
        `;
    })
    this.addPainingClick();
  }

  /**
   * 给推荐作品添加点击事件
   */
  addPainingClick() {
    const works = document.querySelectorAll('.recommend .list .item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/paining-details.html?pid=${work.children[0].value}`;
        window.location.href = url;
      })
    })
  }


}

new pageActions();

