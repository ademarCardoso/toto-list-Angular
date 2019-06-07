import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [
    {
      name: 'Ademar'
    },
    {
      name: 'Ana clara'
    },
    {
      name: 'Nadir'
    }
]

  addTodo (newTodoValue) {
    if (newTodoValue === '') {
      alert('Campos vazios')
    } else {

      let newTodo = {
        name: newTodoValue
      }

      this.todos.push(newTodo)
    }
  }

  deleteTodo (todo) {
    console.log(todo)
    this.todos = this.todos.filter( t => t.name !== todo.name )
  }

  updateTodo(todo) {
    let input = document.querySelector('input')
    input.value = todo.name

    // this.todos


  }

}
