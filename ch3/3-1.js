function fetchData() {
  return new Promise(function(resolve) {
      setTimeout(() => {
          resolve("資料已經獲取");
      }, 2000);
  });
}
function fetchData2() {
  return new Promise(function(resolve) {
      setTimeout(() => {
          resolve("資料已經獲取2");
      }, 2000);
  });
}
function fetchData3() {
  return new Promise(function(resolve) {
      setTimeout(() => {
          resolve("資料已經獲取3");
      }, 2000);
  });
}

function getDataWithThen() {
  console.log("開始獲取資料...");
  fetchData()
  .then(function (data) {
      console.log(data);
      return fetchData2();
  })
  .then(function (data) {
    console.log(data);
    return fetchData3();
  })
  .then(function (data) {
    console.log(data);
  })
}

async function getDataWithThen() {
  console.log("開始獲取資料...");
  const res = await fetchData();
  console.log(res);
  const res2 = await fetchData2();
  console.log(res2);
  const res3 = await fetchData3();
  console.log(res3);
}

// getDataWithThen();

// const api_path = "test0";

// // Promise 結構的寫法
// const getProductList = async () => {
//   // axios.get(`https://livejs-api.hexschoo.io/api/livejs/v1/customer/${api_path}/products`)
//   //   .then(response => {
// 	//     console.log(response.data.products);
//   //   })
//   //   .catch(error => {
//   //     console.log(error);
//   //   });

//   try {
//     const res = await axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`);
//     console.log(res.data.products);
//   } catch (error) {
//     console.log('error', error);
//   }


// };
// getProductList();

function customPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`奇數: ${randomNumber}`));
      }
    }, 1000);
  });
}

// 使用範例

// function count(){
//   customPromise()
//   .then(result => console.log(`成功: ${result}`))
//   .catch(error => console.error(`失敗: ${error.message}`));
// }

async function count(){
  try {
    const res = await customPromise()
    console.log(`成功: ${res}`);
  } catch (error) {
    console.error(`失敗: ${error.message}`);
  }
}

count();