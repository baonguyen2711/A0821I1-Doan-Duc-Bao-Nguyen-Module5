import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content: FormControl = new FormControl();

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }
  create() {
    const todo: Todo = {
      id: parseInt(String(this.todos[this.todos.length - 1].id)) + 1,
      content: this.content.value
    }
    this.todoService.create(todo).subscribe();
    this.content.setValue('');
    this.getAll();
  }

  delete(id: number | any) {
    this.todoService.delete(id).subscribe();
    this.getAll();
  }

  edit(todo: Todo) {
    //this.todoService.edit(id).subscribe();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
