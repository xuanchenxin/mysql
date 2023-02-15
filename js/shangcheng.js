/* 鼠标经过显示图片翻页按钮，鼠标离开隐藏 */
var lunbo = document.querySelector('.lunbo');
var move_left = lunbo.querySelector('.move_left');
var move_right = lunbo.querySelector('.move_right');
var num = 0;
var circle = 0;
lunbo.addEventListener('mouseover', function () {
  move_left.style.display = 'block';
  move_right.style.display = 'block';
  clearInterval(timer);/* 鼠标经过停止自动播放 */
  timer = null;
});
lunbo.addEventListener('mouseleave', function () {
  move_left.style.display = 'none';
  move_right.style.display = 'none';
  timer = setInterval(function () {
    move_right.click();
  }, 10000);                                                                     /* 多少ms自动播放 */
});
/* 小圆点操作 */
var ol = lunbo.querySelector('.doted');/*  ol是小圆点的父元素 */
var doteds = ol.children;
var imgs = lunbo.querySelector('.imgs');
var img_width = imgs.children[0].offsetWidth;/* 获取图片宽度 */
for (var i = 0; i < doteds.length; i++) {/* 给每个小圆点添加点击事件 */
  doteds[i].setAttribute('index', i);/* 给每个小圆点设置索引号 */
  doteds[i].addEventListener('click', function () {
    for (var i = 0; i < doteds.length; i++) {/* 先让所有小圆点没用颜色 */
      doteds[i].className = '';
    }
    this.className = 'current';/* 再让点击的小圆点变成白色 */
    /* 点击小圆点移动ul */
    var index = this.getAttribute('index');/* 得到点击的小圆点的索引号 */
    num = index;
    circle = index;
    animate(imgs, -992 * index);                                                       /* 图片宽度 */
  })
}
/* 左右按钮翻页 */
var flag = true;
move_right.addEventListener('click', function () {
  /* 如果走到了最后复制的一张图片，此时imhs要快速回到第一张，即left=0 ,并且跳过第一张*/
  if (flag == true) {
    flag = false;
    if (num == 4)                                                                        /* 几张图片，不算复制的 */ {
      imgs.style.left = 0;
      num = 0;
    }
    num++;
    animate(imgs, -num * 992, function () {
      flag = true;
    });                                               /* 图片宽度 */
    circle++;
    if (circle == 4) {                                                        /* 小圆点个数 */
      circle = 0;
    }
    /* 小圆点跟随 */
    for (var i = 0; i < doteds.length; i++) {
      doteds[i].className = '';
    }
    doteds[circle].className = 'current';
  }
});

move_left.addEventListener('click', function () {
  /* 如果走到了最后复制的一张图片，此时imhs要快速回到第一张，即left=0 ,并且跳过第一张*/
  if (flag == true) {
    flag = false;
    if (num == 0) {
      imgs.style.left = '-3968px';                                                     /* -图片宽度*小圆点个数 */
      num = 2;                                                                          /* 小圆点个数 */
    }
    num--;
    animate(imgs, -num * 992, function () {
      flag = true;
    });                                               /* 图片宽度 */
    circle--;
    if (circle < 0) {
      circle = 3;                                                           /* 小圆点个数-1 */
    }
    /* 小圆点跟随 */
    for (var i = 0; i < doteds.length; i++) {
      doteds[i].className = '';
    }
    doteds[circle].className = 'current';
  }
});
/* 自动播放 */
var timer = setInterval(function () {
  move_right.click();/* 手动调用点击事件 */
}, 10000);                                                                 /* 多少ms自动播放 */


var erji = document.querySelector('#first');
var chuandai = document.querySelector('#second');
var erji1 = document.querySelector('#first1');
var chuandai1 = document.querySelector('#second1');
erji.addEventListener('mouseover', function () {
  chuandai.style.color = '#000';
  chuandai.style.border = '0';
  chuandai1.style.display = 'none';
  erji.style.color = '#ff6700';
  erji.style.borderBottom = '1px solid #ff6700';
  erji1.style.display = 'block';
});
chuandai.addEventListener('mouseover', function () {
  erji.style.color = '#000';
  erji.style.border = '0';
  erji1.style.display = 'none';
  chuandai.style.color = '#ff6700';
  chuandai.style.borderBottom = '1px solid #ff6700';
  chuandai1.style.display = 'block';
});

var zhenfu = document.querySelector('.zhenfu');
document.addEventListener('scroll', function () {
  if (window.pageYOffset > 400) {
    zhenfu.style.display = 'block';
  }
  else {
    zhenfu.style.display = 'none';
  }
});


/* 回到顶部 */
zhenfu.addEventListener('click', function () {
  animate3(window, 0);
});


/* 切换输入框的关键字   局部变量 其他地方命名不会重复*/
let hotword = document.querySelector('.hotword');
(function () {
  let hotwords = ['Redmi K60 Pro', 'Xiaomi 13 Pro', 'Xiaomi 13', 'Xiaomi 12S Ultua'];
  let index = 0;//数组的下标
  setInterval(function () {
    index++;
    if (index > hotwords.length - 1) {
      index = 0;
    }
    hotword.placeholder = hotwords[index];
  }, 3000);
})();

/* //模糊查询
//input当内容一改变就发生的事件 change内容确定改变（失去焦点或者回车）
let listArr = ['乐哥', '乐神', '乐总', 'le god', '乐子小黑子', '乐哥什么黑子', '郭建别笑了', '郭建你在狗叫什么', '建哥什么牛马'];
let searchhid = document.querySelector('.search-hid');
//文本框内容改变触发
hotword.addEventListener('input', function () {
  searchhid.innerHTML = ''
  mohu(listArr, hotword.value, searchhid)

})

const input = document.querySelector('input')

input.addEventListener('focus', function () {
  searchhid.innerHTML = ''
  mohu(listArr, hotword.value, searchhid)
})

input.addEventListener('blur', function () {
  searchhid.style.display = 'none'
})

function mohu(arr, value, fu) {
  if (value !== '') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(value) !== -1) {
        const p = document.createElement('p')
        p.innerHTML = `<p> ${listArr[i]}</p>`
        fu.appendChild(p)
        fu.style.display = 'block'
      }
      if (fu.children.length === 0) {
        fu.style.display = 'none'
      }
    }
  }
}
 */
let obj = {} //定义缓存对象 搜索的结果保存到这里
let timerId = null  //定时器id
const input = document.querySelector('input')
let searchhid = document.querySelector('.search-hid')
const btn = document.querySelector('.btn')
input.addEventListener('keyup', function () {

  let keywords = this.value.trim()
  //判断用户是否输入内容 
  if (keywords.length <= 0) {
    searchhid.style.display = 'none'
  } else {
    //发请求前先判断缓存里有没有数据
    if (obj[keywords]) { //有数据直接渲染   keywords是变量 不能obj.keywords
      searchhid.innerHTML = ''
      searchhid.innerHTML = obj[keywords]
      searchhid.style.display = 'block'
    }
    else {
      //用户输入内容 调用函数 发送请求 渲染页面
      fangdou(keywords)
    }
  }
})



//根据用户输入的内容发起请求得到数据渲染到页面 函数
function getList(kw) { //kw是用户在搜索框输入的内容
  $.ajax({
    url: 'https://suggest.taobao.com/sug?q=' + kw,
    dataType: 'jsonp',
    success: function (res) {
      let k = input.value
      let content = res.result.map(function (item, index) {
        return `<p>${item[0]}</p>`
      })
      if (content.length > 0) {
        searchhid.style.display = 'block'
      }
      else {
        searchhid.style.display = 'none'
      }
      content = content.join('')
      searchhid.innerHTML = ''
      searchhid.innerHTML = content

      if (k !== '') {
        //缓存  用户输入的内容和后台响应的数据分别为键和值  重复搜索就不会再发送请求
        obj[k] = content  //k是变量不能用obj.k
        console.log(obj)
      }
    }
  })
}


//定义防抖函数  用户输入内容后0.5秒内没有再输入就发送请求 否则重新计时  减少请求次数
function fangdou(kw) { //kw是用户输入的内容
  clearTimeout(timerId)
  timerId = setTimeout(function () {
    getList(kw)  //kw是防抖函数传过来的
  }, 500)
}

//失去焦点隐藏
input.addEventListener('blur', function () {
  searchhid.style.display = 'none'
})

//聚焦先判断搜索框有没有内容  有内容就显示
input.addEventListener('focus', function () {
  let keywords = this.value.trim()
  if (keywords.length <= 0) {
    searchhid.style.display = 'none'
  } else {
    searchhid.style.display = 'block'
  }

})
