const api_path = "自訂路徑";

// Promise 結構的寫法
const getProductList = () => {
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`)
    .then(response => {
	    console.log(response.data.products);
    })
};
getProductList();

// async / await 寫法
const getProductList = async () => {
    const response = await axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`);
    console.log(response.data.products);
};
getProductList();