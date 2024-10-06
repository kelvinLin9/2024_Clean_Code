// ReferenceError
// console.log(a)

// SyntaxError


// TypeError




// 自訂錯誤

const a = new Error("姓名欄位沒有填寫") // 建立一個 Error 物件，並指定 message
a.name = "驗證失敗"; // 自訂錯誤類型的名稱

console.log(a); // 驗證失敗: 姓名欄位沒有填寫
console.log(a.name); // '驗證失敗'
console.log(a.message); // '姓名欄位沒有填寫'