class pageActions {
  constructor() {
    const common = new Common(); // 实例化公共方法
    common.setNavAndFooter();
    common.setNavActiveStyle();
    common.goHome(); // 点击logo，跳转到首页
    common.showNav();
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.getData();
    this.setupCarousel();
    this.setupControls();
  }

  /**
   * 获取页面数据
   */
  getData() {
    const carousel = document.getElementById('carousel');
    data.data.forEach((item, index) => {
      let html = `
        <div class="item ${index === 0 ? 'active' : ''}" data-index="${index}">
          <img src="${item.image}" alt="">
          <div class="info">
            <p class="name">${item.name}</p>
            <p class="article">
              <span>${item.dynasties + '·' + item.author}</span>
              <span>${item.size}</span>
            </p>
          </div>
        </div>
      `
      carousel.insertAdjacentHTML('beforeend', html);
    })
    this.addPainingClick();
  }

  /**
   * 设置轮播
   */
  setupCarousel() {
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;

    const updateCarousel = (index) => {
      items.forEach((item, i) => {
        item.classList.remove('active', 'prev', 'next');
        
        const position = (i - index + totalItems) % totalItems;
        
        if (position === 0) {
          item.classList.add('active');
        } else if (position === 1) {
          item.classList.add('next');
        } else if (position === totalItems - 1) {
          item.classList.add('prev');
        }
      });
    };

    // 鼠标滚轮事件
    document.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) {
        this.currentIndex = (this.currentIndex + 1) % totalItems;
      } else if (e.deltaY < 0) {
        this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
      }
      updateCarousel(this.currentIndex);
    }, { passive: true });

    // 触摸滑动事件
    let startY = 0;
    document.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
      const endY = e.touches[0].clientY;
      const diff = startY - endY;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.currentIndex = (this.currentIndex + 1) % totalItems;
        } else {
          this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
        }
        updateCarousel(this.currentIndex);
        startY = endY;
      }
    });

    this.updateCarouselDisplay = updateCarousel;
  }

  /**
   * 设置控制按钮
   */
  setupControls() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalItems = document.querySelectorAll('.item').length;

    prevBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
      this.updateCarouselDisplay(this.currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % totalItems;
      this.updateCarouselDisplay(this.currentIndex);
    });
  }

  /**
   * 给作品添加点击事件
   */
  addPainingClick() {
    const works = document.querySelectorAll('.item');
    works.forEach((work, index) => {
      work.addEventListener('click', () => {
        const url = `../pages/paining-details.html?pid=${index + 1}&pagename=page2`;
        window.location.href = url;
      })
    })
  }

}

const action = new pageActions();