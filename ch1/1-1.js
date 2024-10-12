// 1 - 使用具有意義且可閱讀的名稱
// 1.
const colorData = ['red', 'white', 'black'];

// 2. 無法點擊的按鈕狀態
let buttonStatus = 'disabled';

// 3. 註冊時需填寫的資訊
let userInfo = {
	account: '',
  name: '',
  password: '',
}

// 4.
let isLoading = false;

// 5. bmi 公式
const bmi = weight / (height / 100) **2;


// 2 - 使用可搜尋的名稱
// 0.5 秒後頁面重整
// function reloadDelayTime () {
//   setTimeout(() => {
//     window.location.reload();
//   }, 500);
// }


// 3 - 使用可解釋的變數
// 九九乘法表
// 英文單字提示：multiplier 表示乘數，multiplicand 表示被乘數，product 代表乘積
const size = 9;
for (let multiplier = 1; multiplier <= size; multiplier++) {
  let row = '';
  const product = multiplier * multiplicand
  for (let multiplicand = 1; multiplicand <= size; multiplicand++) {
    row += `${multiplier} * ${multiplicand} = ${product}\\t`;
  }
  console.log(row);
}

