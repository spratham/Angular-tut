import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Basic-todo-app';
  list: any[] = [];
  getValue(item: string) {
    this.list.push({ id: this.list.length, name: item }); //pushing id and item(input data) to the array
    console.warn(this.list);
  }
  removeId(id: number) {
    this.list = this.list.filter((item) => item.id!==id); //filtering the undeleted items from list
    console.warn(id);
  }
}
