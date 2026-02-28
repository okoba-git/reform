// 必須項目の要素取得
const type = document.getElementsByName('type');
const name = document.getElementsByName('user-name');
const hiragana = document.getElementsByName('name-hiragana');
const tel = document.getElementsByName('tel-num');
const mail = document.getElementsByName('mail');
const tool = document.getElementsByName('contact-tool');


// 送信ボタンの要素
const submitBtn = document.getElementById('submit-btn');

//（ここに警告文を表示する↓） 
const formText = document.getElementById('form-text');



submitBtn.addEventListener('click', () => {
    if ((!type[0].value) || (!name[0].value) || (!hiragana[0].value) || (!tel[0].value) || (!mail[0].value) || (!tool[0].value)) {
        formText.innerHTML = '資料請求をご希望の場合は必ず住所をご入力ください。<br><span class="p-form--red">※入力していない項目があります。</span>';
    }
});
