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
  ]

  ngOnInit(): void {
  }

  public deleteItemFromTaskList(index: number){
    this.taskList.splice(index, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Deseja deletar todos?")
    if(confirm){
      this.taskList = []
    }
  }

  public addItem(taskDescription: string){
    this.taskList.push({task: taskDescription, checked: false})
  }

}
