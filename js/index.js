   /* 轮播图开始 */
   /* 鼠标经过显示图片翻页按钮，鼠标离开隐藏 */
    var lunbo=document.querySelector('.lunbo');
    var move_left=lunbo.querySelector('.move_left');
    var move_right=lunbo.querySelector('.move_right');
    var num=0;
    var circle=0;
   
    /* 小圆点操作 */
    var ol=lunbo.querySelector('.doted');/*  ol是小圆点的父元素 */
    var doteds=ol.children;
    var imgs=lunbo.querySelector('.imgs');
    var img_width=imgs.children[0].offsetWidth;/* 获取图片宽度 */
    for(var i=0;i<doteds.length;i++) {/* 给每个小圆点添加点击事件 */
        doteds[i].setAttribute('index',i);/* 给每个小圆点设置索引号 */
        doteds[i].addEventListener('click',function(){
            for(var i=0;i<doteds.length;i++){/* 先让所有小圆点没用颜色 */
                doteds[i].className='';
            }
            this.className='current';/* 再让点击的小圆点变成白色 */
            /* 点击小圆点移动ul */
            var index=this.getAttribute('index');/* 得到点击的小圆点的索引号 */
            num=index;
            circle=index;
            animate(imgs,-1520*index);                                                       /* 图片宽度 */
        })
    }
    /* 左右按钮翻页 */
    move_right.addEventListener('click',function(){
        /* 如果走到了最后复制的一张图片，此时imhs要快速回到第一张，即left=0 ,并且跳过第一张*/
          if(num==2)                                                                        /* 几张图片，不算复制的 */
          {
            imgs.style.left=0;
            num=0;
          }
          num++;
          animate(imgs,-num*1520);                                               /* 图片宽度 */
          circle++;
          if(circle==2){                                                        /* 小圆点个数 */
            circle=0;   
          }
          /* 小圆点跟随 */ 
          for(var i=0;i<doteds.length;i++){
            doteds[i].className='';
          }
          doteds[circle].className='current';                                           
    })

    move_left.addEventListener('click',function(){
        /* 如果走到了最后复制的一张图片，此时imhs要快速回到第一张，即left=0 ,并且跳过第一张*/
          if(num==0)                                                                       
          {
            imgs.style.left='-3040px';                                                     /* -图片宽度*小圆点个数 */
            num=2;                                                                          /* 小圆点个数 */
          }
          num--;
          animate(imgs,-num*1520);                                               /* 图片宽度 */
          circle--;
          if(circle<0){                                                     
            circle=1;                                                           /* 小圆点个数-1 */
          }
          /* 小圆点跟随 */ 
          for(var i=0;i<doteds.length;i++){
            doteds[i].className='';
          }
          doteds[circle].className='current';                                           
    })
    /* 自动播放 */
    var timer=setInterval(function(){
        move_right.click();/* 手动调用点击事件 */
    },6000);                                                /* 多少ms自动播放 */
/* 轮播图结束 */


var ak=document.querySelector('.ak');
var fanhui=document.querySelector('.fanhui');
document.addEventListener('scroll',function(){
  if(window.pageYOffset>=400){
    ak.style.backgroundColor='rgba(0,0,0,.85)';
    fanhui.style.display='block';
  }
  else{
    ak.style.backgroundColor='transparent';
    fanhui.style.display='none';
  }

});