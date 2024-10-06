function fetchData() {
  return new Promise(function(resolve) {
      setTimeout(() => {
          resolve("資料已經獲取");
      }, 2000);
  });
}

function getDataWithThen() {
  console.log("開始獲取資料...");
  fetchData().then(function (data) {
      console.log(data);
  });
}

getDataWithThen();



// function fetchData() {
//   return new Promise(function(resolve) {
//       setTimeout(() => {
//           resolve("資料已經獲取");
//       }, 2000);
//   });
// }

// // 使用 Async/Await 的作法
// async function getData() {
//   console.log("開始獲取資料...");
//   const data = await fetchData();
//   console.log(data);
// }

// getData();