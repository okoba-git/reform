// ハンバーガーメニュー

const hum = document.getElementById('hamburger');
const openNav = document.getElementById('open');

hum.addEventListener('click', () => {
    openNav.classList.toggle('active');
})


// スクロールアニメーションを付けたい要素を取得
const titles = document.querySelectorAll(".c-title");
const processImgs = document.querySelectorAll(".p-process__img");
const subCopy = document.querySelectorAll('.subcopy')

// オプション設定
const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
}
// インスタンス生成
// コールバック関数とオプションを渡します
const observer = new IntersectionObserver(doWhenIntersect, option);


// それぞれの要素を監視する
titles.forEach(title => {
    observer.observe(title);
});
processImgs.forEach(img => {
    observer.observe(img);
})
subCopy.forEach(item => {
    observer.observe(item);
})


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
