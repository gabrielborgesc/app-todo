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

  @Output() public emitItemTaskList = new EventEmitter()

  public taskDescription: string = "";

  public callAddItem(){
    this.taskDescription = this.taskDescription.trim() //remove os espaços do inicio e do final
    if(this.taskDescription){
      this.emitItemTaskList.emit(this.taskDescription)
      this.taskDescription="";
    }
  }

}
