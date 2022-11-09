import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TOggle Element';
  display= false;
toggleElement()
{
this.display=!this.display;

}


}
