import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Todo } from 'src/app/Models/todo';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit{
  todo : Todo | undefined;
  constructor(private route:ActivatedRoute, private todoservice:TodoService,
    private router:Router){}
    ngOnInit(): void {
      this.getTodoId();
    }

    getTodoId(){
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.todoservice.getTodoById(id).subscribe(todo=>{
        this.todo = todo
      });
    }

    updateTodo() :void{
      if(this.todo){
        this.todoservice.updateTodo(this.todo).subscribe(()=>{
          this.router.navigate(['/todo'])
        });
      }
    }
}
