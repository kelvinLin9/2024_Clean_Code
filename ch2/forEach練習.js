let data = [
  {
    "name": "肥宅心碎賞櫻3日",
    "area": "高雄",
      "price": 1400,
      "rate": 10
  },
  {
      "name": "貓空纜車雙程票",
      "area": "台北",
      "price": 240,
      "rate": 2
  },
  {
      "name": "台中谷關溫泉會1日",
      "area": "台中",
      "price": 1765,
      "rate": 7
  }
];

// let totalPrice = 0
let kaohsiungTotal = 0
data.forEach(function(item, index) {
  // console.log(index, item.rate)
  // totalPrice += item.price
  // if (item.rate >= 7) {
  //   console.log(index, item)
  // }
  if(item.area === "高雄") {
    kaohsiungTotal += 1
  }
})
// console.log(totalPrice)
console.log(kaohsiungTotal)