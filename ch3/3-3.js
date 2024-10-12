const api_path = "test00";

// Promise 結構的寫法
const getProductList = async () => {
  const res = await axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`)
    // .then(response => {
	  //   console.log(response.data.products);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
};
getProductList();

