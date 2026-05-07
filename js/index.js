class pageActions {
  constructor() {
    const common = new Common();
    common.setNavAndFooter(); // 设置导航栏和页脚
    common.setNavActiveStyle();
    common.goHome(); // 点击logo，跳转到首页
    common.showNav(); 
    this.init();
  }

  init() {
    this.initBannerSlider();
    this.addWorksBackground();
    this.addWorksClick();
    this.addPainingClick();
    this.addSchoolsClick();
    this.addArticleClick();
  }

  /**
   * 初始化轮播图
   */
  initBannerSlider() {
    // 获取轮播图的容器元素  
    const topBanner = document.getElementById('banner');

    // 轮播图的图片数组  
    const bannerImgs = [
      '../images/index/banner01.png',
      '../images/index/banner02.jpg',
      '../images/index/banner03.jpg',
      '../images/index/banner04.png',
      '../images/index/banner05.png',
    ];

    // 构建轮播图的HTML结构  
    const swiperHtml = `  
      <div class="slider-wrapper" style="height:100%" id="photos">  
        <ul class="slider">  
          ${bannerImgs.map(img => `<li><img src="${img}" alt=""></li>`).join("")}  
        </ul>  
        <button class="btn-switch prev">&lt;</button>  
        <button class="btn-switch next">&gt;</button>  
        <div class="slider-footer">  
          <ul class="slider-nav">  
            ${bannerImgs.map((img, index) => `<li class="dot ${index === 0 ? 'active' : ''}"></li>`).join("")}  
          </ul>  
        </div>  
      </div>  
    `;

    // 插入轮播图HTML  
    topBanner.insertAdjacentHTML('beforeend', swiperHtml);

    // 假设Slider类已经定义好  
    const slider = new Slider('photos');

    // 调用autoPlay方法，实现自动轮播功能  
    slider.autoPlay();
  }

  /**
   * 给作品栏添加点击事件
   */
  addWorksClick() {
    const paintingItems = document.querySelectorAll('.intro-container .item');
    paintingItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        paintingItems.forEach(accordionItem => {
          accordionItem.style.width = '50px'; // 收拢所有部分
          accordionItem.querySelector('.content').style.display = 'none'; // 隐藏所有内容的显示
          if (accordionItem === item) { // 展开选中的部分  
            accordionItem.style.width = '100%';
            accordionItem.querySelector('.content').style.display = 'block'; // 隐藏所有内容的显示
          }
        });
      });
    });
  }

  /**
   * 给作品栏滑块添加背景图
   */
  addWorksBackground() {
    const worksImgs = [
      '../images/index/banner01.png',
      '../images/index/banner02.jpg',
      '../images/index/banner03.jpg',
      '../images/index/banner04.png',
      '../images/index/banner05.png',
      '../images/index/丰年民乐图（村社图）卷.传宋.李嵩绘.绢本设色（30x160.8厘米）台北故宫博物院藏.jpg',
      '../images/index/摹唐卢鸿.草堂十志图卷.纸本水墨.北京故宫博物院藏.jpg',
      '../images/index/月令图卷.明.吴彬绘.绢本设色.65500x2105像素.台北故宫博物院藏.jpg'
    ]
    const works = document.querySelectorAll('.intro-container .item');
    works.forEach((work, index) => {
      work.style.backgroundImage = `url(${worksImgs[index]})`;
    })
  }

  /**
   * 给作品添加点击事件
   */
  addPainingClick() {
    const works = document.querySelectorAll('.paining-container .item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/paining-details.html?pid=${index + 1}&pagename=page2`;
        window.location.href = url;
      })
    })
  }

  /**
   * 给派别添加点击事件
   */
  addSchoolsClick() {
    const works = document.querySelectorAll('.schools-container .item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/schools-details.html?pid=${index + 1}&pagename=page3`;
        window.location.href = url;
      })
    })
  }

  /**
   * 给作家添加点击事件
   */
  addArticleClick() {
    const works = document.querySelectorAll('.article-container .article-box .item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/article-details.html?pid=${work.children[0].value}&pagename=page4`;
        window.location.href = url;
      })
    })
  }

}

const action = new pageActions(); // 创建一个页面操作对象

