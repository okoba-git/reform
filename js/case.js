// 施工事例の情報を配列化
const caseArray =
    [{ title: "猫とのびのび暮らす家", category: "戸建て", owner: "福岡市N様", img: "case1.jpg", alt: "福岡市のリフォーム事例。壁にキャットタワーがつけられており、黒猫がくつろいでいる。" },
    { title: "三世代で囲む食卓", category: "戸建て", owner: "福岡市T様", img: "case2.jpg", alt: "福岡市のリフォーム事例。白い部屋に机と椅子がある。机の上には食器類がおかれている。" },
    { title: "水回りまとめてリフォーム", category: "集合住宅", owner: "古賀市S様", img: "case3.jpg", alt: "古賀市のリフォーム事例。白い壁の部屋。ブラウンの引き出しがある大きな洗面台がある。窓からは青空が見える。" }]


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
