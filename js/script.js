// トップページ
// ニュース
// dl要素取得（ここにHTMLを書く）
const topNewsList = document.getElementById('top-news-area');

let topNewsHtml = '';
for (let i = 0; i < 3; i++) {
    topNewsHtml += `<div class="l-top-news__item"><dt class="l-top-news__item--head"><p class="c-news-item__icon fz12">${newsListArray[i].category}</p>${newsListArray[i].date}</dt><dd class="c-hover__text"><a href="#">${newsListArray[i].title}</a></dd></div>`;
}
topNewsList.innerHTML = topNewsHtml;


// 施工事例

// ここに施工事例のHTMLを書く
const topCaseArea = document.getElementById('js-top-case');

let topCaseHtml = '';
for (let i = 0; i < 3; i++) {
    topCaseHtml += `<li class="p-case__card c-hover__text"><a href="case/case1.html"><img src="img/${caseArray[i].img}"alt="${caseArray[i].alt}" class="p-case__card-img"></a><a href="case/case1.html"><p>【${caseArray[i].category}】${caseArray[i].title}</p><p>${caseArray[i].owner}</p></a></li>`;
}
topCaseArea.innerHTML = topCaseHtml;