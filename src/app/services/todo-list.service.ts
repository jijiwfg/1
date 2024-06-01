import { Injectable } from '@angular/core';
import { MockTodoItems } from './mockdata';


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getTodoList(){
    return MockTodoItems;
  } 
}
