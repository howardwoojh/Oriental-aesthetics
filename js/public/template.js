class Template {
  constructor() {
  }

  navTemplate() {
    return `
   <div class="mask-container">
     <div class="logo" id="logo">
        <img src="../images/public/logo.png" alt="">
        <h1>东方美学·绘画</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a class="page1" href="./index.html?pagename=page1">首页</a>
          </li>
          <li>
            <a class="page2" href="./paining.html?pagename=page2">作品</a>
          </li>
          <li>
            <a class="page3" href="./schools.html?pagename=page3">流派</a>
          </li>
          <li>
            <a class="page4" href="./article.html?pagename=page4">作家</a>
          </li>
          <li>
            <a class="page5" href="./about.html?pagename=page5">关于我们</a>
          </li>
          <li class="search-container">
            <input type="text" placeholder="搜索" id="search">
            <img src="../images/public/团扇.png" alt="">
          </li>
        </ul>
      </nav>
    </div>
    `;
  }

  footerTemplate() {
    return `
    <div class="webside-info">
        <div class="item">
          <div class="box">
            <h2>快捷导航</h2>
            <ul class="item-img-map">
              <li><img src="../images/nav/01.png" alt=""></li>
              <li><img src="../images/nav/02.png" alt=""></li>
              <li><img src="../images/nav/03.png" alt=""></li>
              <li><img src="../images/nav/04.png" alt=""></li>
              <li><img src="../images/nav/05.png" alt=""></li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="box">
           <h2>素材来源</h2>
            <ul>
              <li>-&nbsp;图片:均来自于必应图片搜索</li>
              <li>-&nbsp;字体:来自站长素材网免费资源</li>
              <li>-&nbsp;内容:文心一言AI工具问答生成</li>
              <li>-&nbsp;图标:均来自于阿里巴巴图标库</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="box">
            <h2>免责声明</h2>
            <ul>
              <li>-&nbsp;该网站所有素材均来自网络,</li>
              <li>-&nbsp;不作任何商业用途.如有侵权</li>
              <li>-&nbsp;,联系删除.通过其它任何方式</li>
              <li>-&nbsp;获得该作品者,不得二次出售</li>
            </ul>
          </div>
        </div>
        <div class="item contact-info">
         <div class="box">
           <h2>联系我们</h2>
            <div class="contact-item"><img src="../images/public/地址.png" alt=""><span>xx市xx区xx街道</span></div>
            <div class="contact-item"><img src="../images/public/电话.png" alt=""><span>(023)123456789</span></div>
            <div class="contact-item"><img src="../images/public/邮箱.png" alt=""><span>123456789@qq.com</span></div>
            <ul>
              <li><img src="../images/public/QQ.png" alt=""></li>
              <li><img src="../images/public/微信.png" alt=""></li>
              <li><img src="../images/public/微博.png" alt=""></li>
            </ul>
         </div>
        </div>
        
      </div>
      <div class="copyright">
        <p>Copyright&nbsp;&copy;2024&nbsp;快乐猪老三</p>
      </div>
   `
  }

}