import { Component,OnInit} from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  todoItems : TodoItem[]= [];

  constructor (private todoListService: TodoListService) {
    
  }
  ngOnInit(): void {
      this.todoItems = this.todoListService.getTodoList();
  }  
}

