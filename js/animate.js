
    /* （要移动的盒子，要绝对定位，向左移动的距离，移动完要执行的函数） */
    function animate(obj,target,callback){
        clearInterval(obj.timer);/* 取消上一次的移动 */
        obj.timer=setInterval(function(){
            var step=(target-obj.offsetLeft)/10;/* 移动由快变慢 */
            step=step>0?Math.ceil(step):Math.floor(step);
            if(obj.offsetLeft==target){/* 与有定位的父元素的距离 子元素左侧与父元素左侧的距离 */
                clearInterval(obj.timer);
                if(callback){/* 如果传入了回调函数，就执行 */
                    callback();
                }
            }
            obj.style.left=obj.offsetLeft+step+'px';
        },15);
        
    }

    /* 向下移动 */
    function animate2(obj,target,callback){
        clearInterval(obj.timer);/* 取消上一次的移动 */
        obj.timer=setInterval(function(){
            var step=(target-obj.offsetTop)/10;/* 移动由快变慢 */
            step=step>0?Math.ceil(step):Math.floor(step);
            if(obj.offsetTop==target){
                clearInterval(obj.timer);
                if(callback){/* 如果传入了回调函数，就执行 */
                    callback();
                }
            }
            obj.style.top=obj.offsetTop+step+'px';
        },15);
        
    }

    /* 点击之后滚动到页面顶部 */
                                                            /* 调用时animate3(window,0) */
    /* window.pageYOffset 当前位置与页面顶部的距离 */
    function animate3(obj,target,callback){
        clearInterval(obj.timer);/* 取消上一次的移动 */
        obj.timer=setInterval(function(){
            var step=(target-window.pageYOffset)/10;/* 移动由快变慢 */
            step=step>0?Math.ceil(step):Math.floor(step);
            if(window.pageYOffset==target){
                clearInterval(obj.timer);
                if(callback){/* 如果传入了回调函数，就执行 */
                    callback();
                }
            }
            window.scroll(0,window.pageYOffset+step);
        },20);
        
    }

