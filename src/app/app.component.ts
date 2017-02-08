import { Component } from '@angular/core';
import { Item } from './item';
import { ItemDataService } from './item-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemDataService]
})

export class AppComponent {
  
  newItem: Item = new Item();
  
  constructor(private itemDataService: ItemDataService) { }
  
  addItem() {
    this.itemDataService.addItem(this.newItem);
    this.newItem = new Item();
  }
  
  toggleItemComplete(item) {
    this.itemDataService.toggleItemComplete(item);
  }
  
  removeItem(item) {
    this.itemDataService.deleteItemById(item.id);
  }
  
  get items2() {
    return this.itemDataService.getAllItems();
  }
}
