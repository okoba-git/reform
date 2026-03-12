// 施工事例の情報を配列化
caseArray =
    [{ title: "猫とのびのび暮らす家", category: "戸建て", owner: "福岡市N様", img: "case1.jpg", alt: "福岡市のリフォーム事例。壁にキャットタワーがつけられており、黒猫がくつろいでいる。" },
    { title: "三世代で囲む食卓", category: "戸建て", owner: "福岡市T様", img: "case2.jpg", alt: "福岡市のリフォーム事例。白い部屋に机と椅子がある。机の上には食器類がおかれている。" },
    { title: "水回りまとめてリフォーム", category: "集合住宅", owner: "古賀市S様", img: "case3.jpg", alt: "古賀市のリフォーム事例。白い壁の部屋。ブラウンの引き出しがある大きな洗面台がある。窓からは青空が見える。" }]

// 戸建て配列
const houseArray = caseArray.filter(item => item.category === "戸建て");
// 集合住宅配列
const apartArray = caseArray.filter(item => item.category === "集合住宅");

// ボタンのID取得
const allBtn = document.getElementById('all-case');
const houseBtn = document.getElementById('house');
const apartBtn = document.getElementById('apartment');

// 下記エリアに描画
const caseList = document.getElementById('case-list');


// 配列からHTMLを書く関数
function updateCase(array) {
    let html = '';
    array.forEach(e => {
        html += `<li class="p-case-card c-hover__text"><a href="case/case1.html"><img src="img/${e.img}"alt="${e.alt}" class="p-case-card__img"></a><a href="#"><p>【${e.category}】${e.title}</p><p>${e.owner}</p></a></li>`
    });
    caseList.innerHTML = html
}

// ボタンの背景色を変える関数
function changeBackColor(btnName) {
    allBtn.style.background = "none";
    houseBtn.style.background = "none";
    apartBtn.style.background = "none";
    btnName.style.background = "#B0D850";
}



// デフォルト表示
updateCase(caseArray);



// クリックイベント
allBtn.addEventListener('click', () => {
    updateCase(caseArray);
    changeBackColor(allBtn);
})

houseBtn.addEventListener('click', () => {
    updateCase(houseArray);
    changeBackColor(houseBtn);
})

apartBtn.addEventListener('click', () => {
    updateCase(apartArray);
    changeBackColor(apartBtn);
})