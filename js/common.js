// ハンバーガーメニュー

const hum = document.getElementById('hamburger');
const openNav = document.getElementById('open');

hum.addEventListener('click', () => {
    openNav.classList.toggle('active');
})



const titles = document.querySelectorAll(".c-title");

const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
}
// インスタンス生成
// コールバック関数とオプションを渡します
const observer = new IntersectionObserver(doWhenIntersect, option);

// それぞれのtitleを監視する
titles.forEach(title => {
    observer.observe(title);
});


// コールバック関数
function doWhenIntersect(entries) {
    entries.forEach(entry => {

        // 要素が交差したら…
        if (entry.isIntersecting) {
            // クラスをつける
            entry.target.classList.add('animation');

        } else {
            // クラスを外す
            entry.target.classList.remove('animation');
        }
    });
}
