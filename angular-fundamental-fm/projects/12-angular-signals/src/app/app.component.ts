import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Building a TODO List</h1>

    @for (todo of todos(); track $index) {
    <label
      [for]="todo.id"
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
    >
      <input
        type="checkbox"
        [id]="todo.id"
        [checked]="todo.completed"
        (change)="updateTodo(todo)"
      />
      {{ todo.title }}
    </label>

    }

    <P>completed item : {{ completedTdo() }}</P>

    <!-- play  with signal -->

    <!-- <p>{{ firstName() }}</p>
    <p>{{ lastName() | json }}</p>
    <p>{{ Output() }}</p> -->
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  updateTodo(todo: Todo) {
    this.todos.update((todosList) => {
      console.log(todosList);
      return todosList.map((itemTodo) => {
        if (itemTodo.id === todo.id) {
          itemTodo.completed = !itemTodo.completed;
        }
        return itemTodo;
      });
    });
  }

  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  completedTdo = computed(() => {
    return this.todos().filter((todoItem) => todoItem.completed === true)
      .length;
  });

  // play  with signal

  // firstName = signal<string>('sarang');
  // lastName = signal<string>('jain');
  // Output = computed(() => {
  //   return `fullname is ${this.firstName()} and last name ${this.lastName()}`;
  // });
}
