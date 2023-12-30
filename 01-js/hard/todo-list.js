/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.arr=[];
  }
  add(data){
    this.arr.push(data);
  }
  remove(index){
    this.arr.splice(index,1);
  }
  update(index,updateTodo){
    if(index>=this.arr.length){
      return;
    }
    this.arr[index]=updateTodo;
  }
  getAll(){
    return this.arr;
  }
  get(index){
    if(index>=this.arr.length){
      return null;
    }
    return this.arr[index];
  }
  clear(){
    this.arr=[];
  }

}

module.exports = Todo;
