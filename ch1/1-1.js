// 1 - 使用具有意義且可閱讀的名稱
// 1.
const data = ['red', 'white', 'black'];

// 2. 無法點擊的按鈕狀態
let status = 'disabled';

// 3. 註冊時需填寫的資訊
let usr = {
	account: '',
  name: '',
  psd: '',
}

// 4.
let loading = false;

// 5. bmi 公式
const result = w / (h / 100) **2;


// 2 - 使用可搜尋的名稱
// 0.5 秒後頁面重整
function xxx() {
  setTimeout(() => {
    window.location.reload();
  }, 500);
}


// 3 - 使用可解釋的變數
// 九九乘法表
// 英文單字提示：multiplier 表示乘數，multiplicand 表示被乘數，product 代表乘積
const size = 9;
for (let i = 1; i <= size; i++) {
  let row = '';
  for (let j = 1; j <= size; j++) {
    row += `${i} * ${j} = ${i * j}\\t`;
  }
  console.log(row);
}

