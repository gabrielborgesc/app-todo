import { Component, OnInit } from '@angular/core';
import { TaskObj } from '../../model/task-obj';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  public taskList: Array< TaskObj > = [
  ]

  ngOnInit(): void {
  }

  public deleteItemFromTaskList(item: TaskObj){
    const index = this.taskList.indexOf(item)
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

  public sortedTaskList() : Array<TaskObj> {
    this.taskList.sort(this.compareChecked)
    return this.taskList;
  }
  
  private compareChecked(task1: TaskObj, task2: TaskObj) : number {
    if(task1.checked)
      return 1;
    if(task2.checked)
      return -1;
    
    return 0;
  }

}
