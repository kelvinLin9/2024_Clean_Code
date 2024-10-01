const BMI_STATES = [
  { max: 18.5, state: '體重過輕', color: '藍色' },
  { max: 24, state: '體重正常', color: '紅色' },
  { max: 27, state: '體重過重', color: '澄色' },
  { max: 30, state: '體重輕度肥胖', color: '黃色' },
  { max: 35, state: '體重中度肥胖', color: '黑色' },
  { max: Infinity, state: '體重極度肥胖', color: '綠色' }
];

let bmiHistory = [];

const calculateBMI = (height, weight) => {
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  // console.log(typeof bmi);
  return Number(bmi);
};

const getBMIState = (bmi) => {
  return BMI_STATES.find(state => bmi < state.max);
};

const validateInput = (height, weight) => {
  if (typeof height !== 'number' || typeof weight !== 'number') {
    throw new Error('身高和體重必須為數字');
  }
  if (height <= 0 || weight <= 0) {
    throw new Error('身高和體重必須為正數');
  }
};

const printBMI = (height, weight) => {
  try {
    validateInput(height, weight);
    const bmi = calculateBMI(height, weight);
    const { state, color } = getBMIState(bmi);
    console.log(`BMI: ${bmi}, 狀態: ${state}`);
    bmiHistory.push({ height, weight, bmi, state, color });
  } catch (error) {
    console.error(`錯誤: ${error.message}`);
  }
};

const showBMIHistory = () => {
  const recordCount = bmiHistory.length;
  if (recordCount === 0) {
    console.log('目前沒有 BMI 計算記錄');
    return;
  }

  const lastRecord = bmiHistory[recordCount - 1];
  console.log(`您總共計算 ${recordCount} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastRecord.bmi}，${lastRecord.state}！健康指數為${lastRecord.color}！`);
};


printBMI(178, 20);
printBMI(178, 70);
printBMI(178, 85);
printBMI("身高", "體重");
showBMIHistory();

// 使用具有意義且可閱讀的名稱命名變數
// 不會變動的拉出來當常數
// 避免太多的 if/else
// 用 find 取代 switch
// 函式命名以動詞開頭
/* 
一個函式只做一件事情：
先規劃流程：驗證輸入 => 計算BMI => 判斷狀態 => 儲存結果
然後一個功能用一個函數處理
*/