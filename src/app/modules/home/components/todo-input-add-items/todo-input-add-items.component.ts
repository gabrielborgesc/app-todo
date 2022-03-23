import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() public emmitItemTaskList = new EventEmitter()

  public taskDescription: string = "";

  public callAddItem(){
    this.emmitItemTaskList.emit(this.taskDescription)
    this.taskDescription="";
  }

}
