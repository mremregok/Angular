import { Component } from '@angular/core';
import { Todo } from './Models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ItemList = [];

  Item: Todo = { Completed: false, ItemName: ''};
  AddItem(){
    this.ItemList.push( { 'Completed': this.Item.Completed, 'ItemName': this.Item.ItemName });
    this.Item.ItemName = '';
    console.log(this.ItemList);
  }

  todoComplete(todo: Todo){
    this.ItemList.find(x => x.ItemName == todo.ItemName).Completed = true;
    console.log(this.ItemList);
  }

  delete(todo: Todo){
    let index = this.ItemList.indexOf(todo);
    this.ItemList.splice(index, 1);
  }
}
