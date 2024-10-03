const ticketList = [
  {
    id: 0,
    area: "台中"
  },
  {
    id: 1,
    area: "台中"
  },
  {
    id: 2,
    area: "台北"
  },
  {
    id: 3,
    area: "高雄"
  }
]

const areaSelections = document.querySelector('#areaSelections');

let areaFilterData = []

const filterTicketsByArea = function(area) {
  return ticketList.filter(function(item) {
    return item.area === area
  })
}
areaSelections.addEventListener('change', function(e){
  console.log(e.target.value)
  // if(e.target.value === '全部'){
  //   console.log(ticketList)
  //   areaFilterData = ticketList
  // } else {
  //   areaFilterData = ticketList.filter(function(item) {
  //     return item.area === e.target.value
  //   })
  // }
  // console.log(areaFilterData)
  areaFilterData = filterTicketsByArea(e.target.value)
})
console.log(areaFilterData)
/*
- 使用有意義可閱讀的名稱
- 一個函數只做一件事
- 移除重複程式碼
*/