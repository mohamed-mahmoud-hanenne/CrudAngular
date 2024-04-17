import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  Title : string = "To Do List App";
  todos : Todo[] = [];
  newtodo : Todo={} as Todo;

  constructor(private todoservice: TodoService){}
  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.todoservice.getTodo().subscribe(x=>{
      this.todos = x
    })
  }

  createTodo() :void{
    const newtodo1 = {id: this.newtodo.id, name: this.newtodo.name, completed:false}
    this.newtodo = newtodo1;

    this.todoservice.createTodo(newtodo1).subscribe(todo =>{
      this.todos.push(todo)
    });
  }

  deleteTodo(todoId: string) :void{
    this.todoservice.deleteTodo(todoId).subscribe(() =>{
      this.todos = this.todos.filter(todo=> todo.id !==todoId);
    })
  }

}
