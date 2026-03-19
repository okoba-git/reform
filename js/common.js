// ハンバーガーメニュー

const hum = document.getElementById('hamburger');
const openNav = document.getElementById('js-open');

hum.addEventListener('click', () => {
    openNav.classList.toggle('active');
})



// スクロールアニメの関数
function scrollAnime(className) {
    // スクロールアニメーションを付けたい要素を取得
    const items = document.querySelectorAll(`${className}`);
    // それぞれの要素を監視する
    items.forEach(item => {
        observer.observe(item);
    });
}

// オプション設定
const option = {
    root: null,
    rootMargin: "20px",
    threshold: 0,
}
// インスタンス生成
// コールバック関数とオプションを渡します
const observer = new IntersectionObserver(doWhenIntersect, option);

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


scrollAnime('.c-title');
scrollAnime(".p-process__img");
scrollAnime('.subcopy');