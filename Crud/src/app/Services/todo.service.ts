import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos'
  constructor(private httpClient: HttpClient) { }

  getTodo():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  createTodo(todo:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.apiUrl, JSON.stringify(todo));
  }

  getTodoById(id: string):Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.apiUrl}/${id}`)
  }

  updateTodo(todo: Todo):Observable<Todo>{
    return this.httpClient.put<Todo>(`${this.apiUrl}/${todo.id}`,todo)
  }

  deleteTodo(todoId: string):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${todoId}`)
  }
}
