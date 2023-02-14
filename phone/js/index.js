var close = document.querySelector('.closedownloadapp');
var downloadapp = document.querySelector('.downloadapp');
var zhanwei = document.querySelector('.zhanwei');
close.addEventListener('click', function () {
  downloadapp.style.display = 'none';
  zhanwei.style.height = '1.9528rem';
});
/* 轮播图 */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* 轮播图结束 */
const mokuai1 = document.querySelector('.mokuai1')
const mokuai2 = document.querySelector('.mokuai2')
const line = document.querySelector('.line')
const nav = document.querySelector('.nav')
const lis = document.querySelectorAll('.nav li')
let n
nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove('current')
    }
    e.target.classList.add('current')
    /* console.log(e.target.dataset.index); */
    n = window.screen.width > 720 ? 72 : window.screen.width / 10
    line.style.left = e.target.offsetLeft / n + 'rem'
  }
  if (e.target.dataset.index % 2 === 0) {
    mokuai1.style.display = 'block'
    mokuai2.style.display = 'none'
  }
  else {
    mokuai2.style.display = 'block'
    mokuai1.style.display = 'none'
  }
})
