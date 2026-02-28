// お知らせページ

// お知らせの情報
const allArray = [
    { category: 'お知らせ', date: '2025-12-24', title: '冬季休業期間のお知らせ' },
    { category: 'お知らせ', date: '2025-10-08', title: 'マンションリフォーム施工事例を追加しました' },
    { category: 'お得な情報', date: '2025-08-03', title: '水回りリフォーム相談会のご案内' },
    { category: 'お知らせ', date: '2025-05-20', title: '営業時間が変更になります' },
    { category: 'お得な情報', date: '2025-05-20', title: '春のリフォームキャンペーン' },
    { category: 'お得な情報', date: '2025-04-10', title: '【補助金活用】窓断熱リフォーム相談会スタート' },
    { category: 'お知らせ', date: '2025-03-15', title: '一級建築士による無料相談会の空き状況' },
    { category: 'お得な情報', date: '2025-02-01', title: '新生活応援！内装壁紙貼り替えフェア！' },
    { category: 'お知らせ', date: '2025-01-10', title: '公式サイトをリニューアルいたしました' }
];


// アイコンの要素取得
const allIcon = document.getElementById('all');
const newsIcon = document.getElementById('news');
const specialIcon = document.getElementById('special');

// dl要素取得（ここにHTMLを書く）
const newsList = document.getElementById('news-area');


// カテゴリ別に配列を作る
const newsArray = allArray.filter(news =>
    news.category === 'お知らせ');
const specialArray = allArray.filter(news =>
    news.category === 'お得な情報');



//　配列からHTMLを書く関数（全項目）（引数に配列名を入れる）
function updateNews(array) {
    let html = '';
    array.forEach((news) => {
        html += `<div class="c-news-item p-news__box"><dt class="c-news-item__head"><p class="c-news-item__icon fz12">${news.category}</p>${news.date}</dt><dd class="c-hover__text"><a href="#">${news.title}</a></dd></div>`
    });
    newsList.innerHTML = html;
}

// 標準時はすべて表示
allIcon.style.backgroundColor = '#B0D850';
updateNews(allArray);


// アイコンクリックで表示するお知らせを変える

allIcon.addEventListener('click', () => {
    newsIcon.style.backgroundColor = '';
    specialIcon.style.backgroundColor = '';
    allIcon.style.backgroundColor = '#B0D850';
    updateNews(allArray);
})
newsIcon.addEventListener('click', () => {
    allIcon.style.backgroundColor = '';
    specialIcon.style.backgroundColor = '';
    newsIcon.style.backgroundColor = '#B0D850';
    updateNews(newsArray);
})
specialIcon.addEventListener('click', () => {
    allIcon.style.backgroundColor = '';
    newsIcon.style.backgroundColor = '';
    specialIcon.style.backgroundColor = '#B0D850';
    updateNews(specialArray);
})