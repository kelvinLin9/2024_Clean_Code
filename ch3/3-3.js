const api_path = "test00";

// Promise 結構的寫法
const getProductList = () => {
  axios.get(`https://livej-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`)
    .then(response => {
	    console.log(response.data.products);
    })
    .catch(error => {
      console.log(error);
    })
};
getProductList();

// async / await 寫法
// const getProductList = async () => {
//     const response = await axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`);
//     console.log(response.data.products);
// };
// getProductList();


// Promise 結構的寫法
// function addCartItem(id){
//   axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`,{
//     data: {
//       productId: id,
//       quantity: 1
//     }
//   }).
//     then(function (response) {
//       alert("加入購物車成功");

//     })
// }
// addCartItem('YO5KnEkeFBIEVrGDA0Id')

// async / await 寫法
// const addCartItem = async (id) => {
//     const response = await axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`, {
//         data: {
//             productId: id,
//             quantity: 1
//         }
//     });

//     alert("加入購物車成功");
// };
// addCartItem('hLk58hbZpjMMZdEPbce0')