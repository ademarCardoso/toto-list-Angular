import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {
  }

  todos = [
    {
      id: 0,
      name: 'Aprender Angular'
    }
  ]

  addTodo (newTodoValue) {
    if (newTodoValue === '') {
      alert('O campo de input esta vazio')
    } else {

      let newTodo = {
        id: this.todos.length,
        name: newTodoValue
      }

      this.todos.push(newTodo)
    }
  }

  deleteTodo (todo) {
    console.log(todo)
    this.todos = this.todos.filter( t => t.name !== todo.name )
  }

  updateTodo(id, name) {
    let setNewTodo = prompt(`Atualiza o: ${ name }`)

    if (setNewTodo === '' || setNewTodo === name) {
      return
    }
    this.todos[id].name = setNewTodo
  }

}
