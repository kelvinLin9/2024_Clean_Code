// 管理代辦事項清單
function manageTodoList(todoList) {
  // 更新待辦事項清單
  todoList.forEach((todo, index) => {
    if (!todo.completed) {
      todo.completed = true;
    }
  });
  // 通知用戶
  console.log('已完成的待辦事項清單：', todoList);
}




// function printInfo(person) {
//   console.log(`Name: ${person.name}`);
//   console.log(`Age: ${person.age}`);
// }

// function printStudentInfo(student) {
//   console.log(`Name: ${student.name}`);
//   console.log(`Age: ${student.age}`);
//   console.log(`Major: ${student.major}`);
// }

