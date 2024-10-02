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

// console.log('areaSelections', areaSelections.value);

areaSelections.addEventListener('change', function(e){
  const selectedArea = e.target.value;
  console.log('selectedArea', selectedArea)
  // const filteredData = data.filter(function(item){
  //   return item.area === selectedArea;
  // })
  // console.log(filteredData);
})