import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Basic Form';
  print:any= {}
getData(data:any)
{
  console.warn(data)
  this.print=data

}


}
