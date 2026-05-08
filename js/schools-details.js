class pageActions {
  constructor() {
    const common = new Common();
    common.setNavAndFooter();
    common.setNavActiveStyle();
    common.goHome();
    common.showNav();
    this.init();
  }

  init() {
    this.getSchoolId();
    this.setupBackButton();
  }

  /**
   * 获取流派ID并加载数据
   */
  getSchoolId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      this.loadSchoolDetails(parseInt(id));
    }
  }

  /**
   * 加载流派详情
   */
  loadSchoolDetails(id) {
    const school = data.data.find(s => s.id === id);
    
    if (school) {
      // 设置标题
      document.querySelector('.school-name').textContent = school.name;
      document.getElementById('schoolTitle').textContent = school.name;
      document.getElementById('schoolIntro').textContent = school.intro;
      document.getElementById('detailContent').textContent = school.content;

      // 加载浮动图片
      if (school.images && school.images.length > 0) {
        const img = document.createElement('img');
        img.src = school.images[0].url;
        document.getElementById('floatingImage').appendChild(img);
      }

      // 加载代表作品
      this.loadRecommendations(school.images);

      // 加载代表作家
      this.loadArticles(school.articles);
    }
  }

  /**
   * 加载代表作品
   */
  loadRecommendations(images) {
    const list = document.getElementById('recommendList');
    list.innerHTML = '';

    if (images) {
      images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
          <img src="${image.url}" alt="${image.name}">
          <div class="info">
            <div class="name">${image.name}</div>
            <div class="author">${image.author}</div>
          </div>
        `;
        list.appendChild(item);
      });
    }
  }

  /**
   * 加载代表作家
   */
  loadArticles(articles) {
    const list = document.getElementById('articleList');
    list.innerHTML = '';

    if (articles) {
      articles.forEach(article => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
          <div class="info">
            <div class="name">${article.name}</div>
            <div class="author">代表画家</div>
          </div>
        `;
        list.appendChild(item);
      });
    }
  }

  /**
   * 设置返回按钮
   */
  setupBackButton() {
    document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = './schools.html?pagename=page3';
    });
  }
}

const action = new pageActions();
