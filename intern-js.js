document.addEventListener('DOMContentLoaded', function () {
    // 滑鼠事件處理程序，使箭頭按鈕互動
    var arrowBtn = document.getElementById('arrowBtn');
    var arrow = document.querySelector('.arrow');
  
  
    arrowBtn.addEventListener('mouseenter', function (e) {
        gsap.to(arrow, {
            y: 10,
            duration: 0.8,
            ease: 'back.inOut(3)',
            overwrite: 'auto'
        });
    });
  
    arrowBtn.addEventListener('mouseleave', function (e) {
        gsap.to(arrow, {
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto'
        });
    });
  
    arrowBtn.addEventListener('click', function (e) {
        gsap.to(window, {
            scrollTo: window.innerHeight,
            duration: 1.5,
            ease: 'power1.inOut'
        });
    });
  
    // 滾動事件處理程序，與 SVG 動畫同步
    var scrollDist = document.querySelector('.scrollDist');
    var sky = document.querySelector('.sky');
    var cloud1 = document.querySelector('.cloud1');
    var cloud2 = document.querySelector('.cloud2');
    var cloud3 = document.querySelector('.cloud3');
    var mountBg = document.querySelector('.mountBg');
    var mountMg = document.querySelector('.mountMg');
    var mountFg = document.querySelector('.mountFg');
    gsap.set(sky, { y: 0 });
    gsap.set(cloud1, { y: 100 });
    gsap.set(cloud2, { y: -150 });
    gsap.set(cloud3, { y: -50 });
    gsap.set(mountBg, { y: -10 });
    gsap.set(mountMg, { y: -30 });
    gsap.set(mountFg, { y: -50 });
  
    window.addEventListener('scroll', function () {
        var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        var skyY = -200 * scrollPercentage;
        var cloud1Y = -800 * scrollPercentage;
        var cloud2Y = -500 * scrollPercentage;
        var cloud3Y = -650 * scrollPercentage;
        var mountBgY = -100 * scrollPercentage;
        var mountMgY = -250 * scrollPercentage;
        var mountFgY = -600 * scrollPercentage;
  
        gsap.to(sky, { y: skyY });
        gsap.to(cloud1, { y: cloud1Y });
        gsap.to(cloud2, { y: cloud2Y });
        gsap.to(cloud3, { y: cloud3Y });
        gsap.to(mountBg, { y: mountBgY });
        gsap.to(mountMg, { y: mountMgY });
        gsap.to(mountFg, { y: mountFgY });
    });
  });
  