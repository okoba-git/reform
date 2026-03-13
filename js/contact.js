// 必須項目の要素取得
const type = document.getElementsByName('type');
const name = document.getElementsByName('user-name');
const hiragana = document.getElementsByName('name-hiragana');
const tel = document.getElementsByName('tel-num');
const mail = document.getElementsByName('mail');
const tool = document.getElementsByName('contact-tool');


// 送信ボタンの要素
const submitBtn = document.getElementById('submit-btn');

//（ここに警告文を等を表示する↓） 
const formText = document.getElementById('form-text');

// ここに戻る
const formTitle = document.getElementById('form-top');

// 必須項目を入力確認して警告文を表示する関数（引数は条件と警告文の内容）
function inputCheck(conditions, text) {
    if (conditions) {
        let warningText = document.createElement('p');
        warningText.textContent = text;
        // 警告文を赤字にするクラスをつける
        formText.appendChild(warningText);
        warningText.setAttribute('class', 'p-form--red');
    }
}

// 送信ボタンクリック（必須項目入力漏れ時）
submitBtn.addEventListener('click', () => {
    inputCheck(!type[0].checked && !type[1].checked && !type[2].checked, '※お問い合わせの種類を選んでください')
    inputCheck(!name[0].value, '※お名前を入力してください。')
    inputCheck(!hiragana[0].value, '※ふりがなを入力してください。')
    inputCheck(!tel[0].value, '※電話番号を入力してください。')
    inputCheck(!mail[0].value, '※メールアドレスを入力してください。')

    // フォーム上部に戻る
    formTitle.scrollIntoView({ behavior: 'smooth' });
})


// 送信ボタンクリック（送信時）
submitBtn.addEventListener('click', () => {
    {
        if ((type[0].checked || type[1].checked || type[2].checked) && name[0].value && hiragana[0].value && tel[0].value && mail[0].value) {
            let sendText = document.createElement('p');
            sendText.textContent = '送信完了しました。';
            formText.appendChild(sendText);
            sendText.style.color = 'blue';
        }
    }
})