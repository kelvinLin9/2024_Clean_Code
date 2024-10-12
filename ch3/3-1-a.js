// function fetchData(callback) {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       callback(null, "資料a");
//     } else {
//       callback("無法獲取資料", null);
//     }
//   }, 2000);
// }

// function processData(data, callback) {
//   setTimeout(() => {
//     callback(null, data.toUpperCase());
//   }, 1000);
// }

// function saveData(data, callback) {
//   setTimeout(() => {
//     callback(null, `資料 "${data}" 已儲存`);
//   }, 1000);
// }

// 一開始的寫法
// function getDataWithCallback() {
//   console.log("開始獲取資料...");

//   fetchData((error, data) => {
//     if (error) {
//       console.log("獲取資料失敗:", error);
//     } else {
//       console.log("獲取資料成功:", data);

//       // 第二層回調處理資料
//       processData(data, (error, processedData) => {
//         if (error) {
//           console.log("處理資料失敗:", error);
//         } else {
//           console.log("處理資料成功:", processedData);

//           // 第三層回調儲存資料
//           saveData(processedData, (error, message) => {
//             if (error) {
//               console.log("儲存資料失敗:", error);
//             } else {
//               console.log(message);
//             }
//           });
//         }
//       });
//     }
//   });
// }
// getDataWithPromise();


// 使用 Promise 的寫法
// function getDataWithPromise() {
//   console.log("開始獲取資料...");

//   fetchData()
//     .then((data) => {
//       console.log("獲取資料成功:", data);
//       return processData(data);
//     })
//     .then((processedData) => {
//       console.log("處理資料成功:", processedData);
//       return saveData(processedData);
//     })
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.log("失敗:", error);
//     });
// }

// getDataWithPromise();

// 使用 async/await 的寫法

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

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.toUpperCase());
    }, 1000);
  });
}

function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`資料 "${data}" 已儲存`);
    }, 1000);
  });
}

async function getDataWithAsyncAwait() {
  console.log("開始獲取資料...");

  try {
    const data = await fetchData();
    console.log("獲取資料成功:", data);

    const processedData = await processData(data);
    console.log("處理資料成功:", processedData);

    const message = await saveData(processedData);
    console.log(message);

  } catch (error) {
    console.log("失敗:", error);
  }
}

getDataWithAsyncAwait();
