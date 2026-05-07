class Slider {
  constructor(id) {
    this.oBigBox = document.getElementById(id); // 获取大盒子元素  
    this.dotList = this.oBigBox.querySelectorAll('.slider-nav .dot'); // 获取小圆点元素列表
    this.oUllis = this.oBigBox.children[0].children; // 获取轮播图内容元素列表  
    this.num = this.oUllis.length; // 计算图片数量  
    this.i = 0; // 当前下标，初始值为0  
    this.updateIndex(); // 更新当前下标，显示第一张图片和设置按钮状态为禁用状态  
    this.addEvent(); // 添加事件监听器，包括左右按钮点击事件和小圆点移入事件  
    this.autoPlay(); // 自动轮播功能，每隔3秒钟切换到下一张图片，并更新当前下标和小圆点状态 
    this.stopAutoPlay(); // 鼠标移入时停止自动轮播，移出时恢复自动轮播
  }

  updateIndex() {
    for (let i = 0; i < this.num; i++) {
      if (i === this.i) { // 如果当前下标等于当前图片的索引，显示当前图片和设置按钮状态为启用状态
        this.oUllis[i].style.display = 'block';
        this.dotList[i].classList.add('dot-active');
      }
      else {
        this.oUllis[i].style.display = 'none'; // 将其他图片的display属性设置为none，隐藏图片内容 
        this.dotList[i].classList.remove('dot-active'); // 将其他图片的class属性移除，移除active类，
      }
    }
  }

  addEvent() {
    const oNextBtn = this.oBigBox.querySelector('.next'); // 获取下一张按钮元素  
    const oPrevBtn = this.oBigBox.querySelector('.prev'); // 获取上一张按钮元素  
    const oDots = this.oBigBox.querySelectorAll('.dot'); // 获取小圆点元素列表  

    const changeImgBtns = document.querySelectorAll('.btn-switch'); // 获取所有切换图片的按钮
    oNextBtn.addEventListener('click', () => { // 添加下一张按钮点击事件监听器，切换到下一张图片
      this.i++; // 当前下标加1  
      if (this.i >= this.num) { // 如果当前下标大于等于图片数量，将当前下标重置为0，即切换到第一张图片  
        this.i = 0;
      }
      this.updateIndex(); // 更新当前下标，显示对应的图片和设置按钮状态
    });

    oPrevBtn.addEventListener('click', () => { // 添加上一张按钮点击事件监听器，切换到上一张图片
      this.i--; // 当前下标减1  
      if (this.i < 0) { // 如果当前下标小于0，将当前下标重置为图片数量减1，即切换到最后一张图片  
        this.i = this.num - 1;
      }
      this.updateIndex(); // 更新当前下标，显示对应的图片和设置按钮状态
    });

    changeImgBtns.forEach(btn => { // 添加切换图片按钮鼠标移入移出事件监听器
      btn.addEventListener('mouseover', () => {
        // 鼠标移入时，停止自动轮播，并显示对应的图片
        this.stopAutoPlay();
      });
      btn.addEventListener('mouseout', () => {
        // 鼠标移出时，重新开始自动轮播，并显示对应的图片
        this.autoPlay();
      });
    });

    oDots.forEach((dot, index) => {
      dot.addEventListener('click', () => { // 添加小圆点点击事件监听器
        // 点击小圆点时，切换到对应图片，并更新当前下标
        this.i = index;
        this.updateIndex();
      });
      dot.addEventListener('mouseover', () => {
        // 鼠标移入时，停止自动轮播，并显示对应的图片
        this.stopAutoPlay();
      });
      dot.addEventListener('mouseout', () => {
        // 鼠标移出时，重新开始自动轮播，并显示对应的图片
        this.autoPlay();
      });
    });
  }

  stopAutoPlay() {
    clearInterval(this.timer);
  }

  autoPlay() {
    this.timer = setInterval(() => { // 设置定时器，每隔3秒钟执行一次切换操作。
      this.i++; // 当前下标加1  
      if (this.i >= this.num) { // 如果当前下标大于等于图片数量，将当前下标重置为0，即切换到第一张图片
        this.i = 0;
      }
      this.updateIndex(); // 更新当前下标，显示对应的图片和设置按钮状态
    }, 3000);
  }
}
