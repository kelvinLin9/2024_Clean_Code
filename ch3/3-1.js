function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve("資料a");
      } else {
        reject("無法獲取資料");
      }
    }, 2000);
  });
}

function getDataWithThen() {
  console.log("開始獲取資料...");
  fetchData()
  .then((data) => {
    console.log('成功', data);
  })
  .catch((error) => {
    console.log('失敗', error);
  });
}

getDataWithThen();