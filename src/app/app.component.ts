import { Component } from '@angular/core';
import { UserDataService } from './user-service/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Get HTTP';
  constructor() {



  }

  ngOnInit(): void {}
}


