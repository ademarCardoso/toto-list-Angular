import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {
  }

  id = 0

  todos = [
    {
      id: this.id += 1,
      name: 'Ademar'
    },
    {
      id: this.id += 1,
      name: 'Ana clara'
    },
    {
      id: this.id += 1,
      name: 'Nadir'
    }
]

  addTodo (newTodoValue) {
    if (this.todos === []) {
      id: this.id = 0
    }
    if (newTodoValue === '') {
      alert('O campo de input esta vazio')
    } else {

      let newTodo = {
        id: this.id += 1,
        name: newTodoValue
      }

      this.todos.push(newTodo)
    }
  }

  deleteTodo (todo) {
    console.log(todo)
    this.todos = this.todos.filter( t => t.name !== todo.name )
    this.id--
  }

  updateTodo(todo) {
    let input = document.querySelector('input')
    input.value = todo.name

  }

}
