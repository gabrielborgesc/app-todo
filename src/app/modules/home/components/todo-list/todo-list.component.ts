import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  public taskList: Array< TaskList > = [
    // {task: "task1", checked: true},
    // {task: "task2", checked: false},
  ]

  ngOnInit(): void {
  }

}
