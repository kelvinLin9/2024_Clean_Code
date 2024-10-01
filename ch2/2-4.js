const data = [
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
let filterData = []

areaSelections.addEventListener('change', function(){
  if(areaSelections.value === '全部'){
    filterData = data
  } else {
    filterData = data.filter(function(item){
      return item.area === areaSelections.value
    })
  }
  console.log(filterData)
})