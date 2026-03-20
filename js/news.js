// お知らせページ

// お知らせの情報
const newsListArray = [
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


//　配列からHTMLを書く関数（全項目）（引数に配列名を入れる）
function renderNewsList(array) {
    let html = '';
    array.forEach((news) => {
        html += `<dt class="l-top-news__item--head"><p class="c-news-item__icon fz12">${news.category}</p>${news.date}</dt><dd class="c-hover__text"><a href="#">${news.title}</a></dd>`
    });
    newsList.innerHTML = html;
}


// アイコンを押してその項目ニュースを描画する関数
function fillterNewsList(icon, category) {
    // アイコンクリック
    icon.addEventListener('click', () => {
        // 該当の項目を表示
        if (category === 'すべて') {
            renderNewsList(newsListArray);
        } else {
            // カテゴリ別に配列を作る
            let newsArray = newsListArray.filter(news =>
                news.category === `${category}`)
            renderNewsList(newsArray);
        };
        // アイコンの色を変える
        allIcon.style.backgroundColor = '';
        newsIcon.style.backgroundColor = '';
        specialIcon.style.backgroundColor = '';
        icon.style.backgroundColor = '#B0D850';
    })
}


// 標準時はすべて表示
allIcon.style.backgroundColor = '#B0D850';
renderNewsList(newsListArray);

fillterNewsList(allIcon, 'すべて')
fillterNewsList(newsIcon, 'お知らせ')
fillterNewsList(specialIcon, 'お得な情報')