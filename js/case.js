
// ボタンのID取得
const allBtn = document.getElementById('all-case');
const houseBtn = document.getElementById('house');
const apartBtn = document.getElementById('apartment');

// 下記エリアに描画
const caseList = document.getElementById('case-list');


// 配列からHTMLを書く関数
function renderCase(array) {
    let html = '';
    array.forEach(e => {
        html += `<li class="p-case__card c-hover__text"><a href="case/case1.html"><img src="img/${e.img}"alt="${e.alt}" class="p-case__card-img"></a><a href="case/case1.html"><p>【${e.category}】${e.title}</p><p>${e.owner}</p></a></li>`
    });
    caseList.innerHTML = html
}


// クリックしたときの関数
function clickFunc(btn, category) {
    btn.addEventListener('click', () => {
        if (category === 'すべて') {
            renderCase(caseArray);
        } else {
            // 該当の配列作成
            const array = caseArray.filter(item => item.category === category);
            // 描画
            renderCase(array);
        }
        // ボタンの色を変える
        allBtn.style.background = "";
        houseBtn.style.background = "";
        apartBtn.style.background = "";
        btn.style.background = "#B0D850";
    })

}

// デフォルト表示
allBtn.style.background = "#B0D850";
renderCase(caseArray);

clickFunc(allBtn, 'すべて');
clickFunc(houseBtn, '戸建て');
clickFunc(apartBtn, '集合住宅');
