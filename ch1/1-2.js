// function updateTodoList(todoList){
//   todoList.forEach((todo, index) => {
//     if (!todo.completed) {
//       todo.completed = true;
//     }
//   });
// }
// function notifyUser() {
//   console.log('已完成的待辦事項清單：', todoList);
// }

// function manageTodoList(todoList) {
//   // 更新待辦事項清單
//   updateTodoList(todoList)
//   // 通知用戶
//   notifyUser()
// }

// function printInfo(person) {
//   console.log(`Name: ${person.name}`);
//   console.log(`Age: ${person.age}`);
// }

function printStudentInfo(student) {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Major: ${student.major}`);
}

function printBasicInfo (person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
}

// function printInfo (person) {
//   printBasicInfo(person)
// }

function printStudentInf (person) {
  printBasicInfo(person)
  console.log(`Major: ${student.major}`);
}