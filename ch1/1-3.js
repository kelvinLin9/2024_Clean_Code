let bmiHistoryData = [];
const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}


function printBmi(height, weight) {
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  
  if (bmi < 18.5) {
    bmiState = "overThin";
  } else if (18.5 <= bmi && bmi < 24) {
    bmiState = "normal";
  } else if (24 <= bmi && bmi < 27) {
    bmiState = "overWeight";
  } else if (27 <= bmi && bmi < 30) {
    bmiState = "mildFat";
  } else if (30 <= bmi && bmi < 35) {
    bmiState = "moderateFat";
  } else if (bmi >= 35) {
    bmiState = "severeFat";
  } else {
    console.log("您的數值輸入錯誤，請重新輸入")
  }
  
  let obj = {};
  obj.bmi = bmi;
  obj.state = bmiState;
  bmiHistoryData.push(obj);
  
  console.log(`您的體重${bmiStatesData[bmiState].state}，健康指數為${bmiStatesData[bmiState].color}`)
}

function showHistoryData(){
  const totalNum = bmiHistoryData.length;
  const lastNum = totalNum - 1;
  const lastState = bmiHistoryData[lastNum].state
  console.log(totalRecord, lastNum, lastState);

  console.log(`您總共計算 ${totalNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！`);
}

// 以下需一行一行執行
printBmi(178, 20); // 您的體重過輕，健康指數為藍色
printBmi(178, 70); // 您的體重正常，健康指數為紅色
printBmi(178, 85); // 您的體重過重，健康指數為澄色

showHistoryData(); // 您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！