import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()

export class ItemDataService {
  
  lastID: number = 0;
  items: Item[] = [];
  
  constructor() { }
  
  addItem(item: Item): ItemDataService {
    if(!item.id) {
      item.id = ++this.lastID;
    }
    this.items.push(item);
    return this;
  }
  
  deleteItemById(id: number): ItemDataService {
    this.items = this.items
      .filter(item => item.id !== id);
    return this;
  }
  
  updateItemById(id: number, values: Object = {}): Item {
    let item = this.getItemById(id);
    if(!item) {
      return null;
    }
    Object.assign(item, values);
    return item;
  }
  
  getItemById(id: number): Item {
    return this.items
      .filter(item => item.id === id)
      .pop();
  }

  getAllItems(): Item[] {
   return this.items;
  }
  
  toggleItemComplete(item: Item) {
    let updatedItem = this.updateItemById(item.id, {
      complete : !item.complete
    });
    return updatedItem;
  }
}
