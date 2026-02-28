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

// トップページ
// dl要素取得（ここにHTMLを書く）
const topNewsList = document.getElementById('top-news-area');

let topPageHtml = '';
for (let i = 0; i < 3; i++) {
    topPageHtml += `<div class="c-news-item"><dt class="c-news-item__head"><p class="c-news-item__icon fz12">${allArray[i].category}</p>${allArray[i].date}</dt><dd class="c-hover__text"><a href="#">${allArray[i].title}</a></dd></div>`;
}
topNewsList.innerHTML = topPageHtml;
