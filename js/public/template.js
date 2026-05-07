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
         
       </div>
       <div class="copyright">
         <p>Copyright&nbsp;&copy;2026&nbsp;吴军蒿</p>
       </div>
    `
  }

}
