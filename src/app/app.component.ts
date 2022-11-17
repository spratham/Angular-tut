import { Component } from '@angular/core';
import { UserDataService } from './user-service/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services';
  users:any;
  constructor(private userData:UserDataService) {

    console.log("userData",userData.users())
    this.users=userData.users()
  }


}
