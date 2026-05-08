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
    this.createFloatingBalls();
  }

  /**
   * 创建浮动球体
   */
  createFloatingBalls() {
    const container = document.getElementById('floatingBalls');
    const schoolsData = data.data;

    schoolsData.forEach((school, index) => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      
      // 随机位置
      const randomX = Math.random() * 70 + 10;
      const randomY = Math.random() * 70 + 10;
      ball.style.left = randomX + '%';
      ball.style.top = randomY + '%';
      ball.style.transform = `translate(-50%, -50%)`;

      // 设置动画延迟
      ball.style.animationDelay = (index * 1.5) + 's';

      const ballContent = document.createElement('div');
      ballContent.className = 'ball-content';
      ballContent.innerHTML = `<span>${school.name}</span>`;

      ball.appendChild(ballContent);

      // 添加点击事件
      ball.addEventListener('click', () => {
        window.location.href = `./schools-details.html?id=${school.id}&pagename=page3`;
      });

      container.appendChild(ball);
    });
  }
}

const action = new pageActions();
