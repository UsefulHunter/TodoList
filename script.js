var todoList = {
 todos: [],
 displayTodos: function() {
   if(this.todos.length === 0){
      console.log('Your Todo list is Empty!');
   } else {
      console.log('My Todos:');
      for (var i=0; i < this.todos.length; i++){
      if(this.todos[i].completed === true){
        console.log('(x)', this.todos[i].todoText);
      }
      else{
        console.log('( )', this.todos[i].todoText);
        }
      }
   }
 },
 addTodo: function(todoText) { //Add an Todo to the List
    this.todos.push({
        todoText: todoText,
        completed: false
    });
    this.displayTodos();
 },
 changeTodo: function(position, todoText){  //Modifies a Todo in the List
   //this.todos[position] = newValue;
   this.todos[position].todoText = todoText;
   this.displayTodos();
 },
 deleteTodo: function(position) { //Deletes a Todo in the list
   this.todos.splice(position, 1);
   this.displayTodos();
 },
 toggleCompleted: function(position){ //Changes the properties of a Todo to True(completed) or false (not completed)
   var todo = this.todos[position];
   todo.completed = !todo.completed;
   this.displayTodos();
 }
 
};