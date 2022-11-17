import { Component } from '@angular/core';
import { UserDataService } from '../user-service/user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users:any ;
  constructor(private userData:UserDataService) {
    console.log('userData', userData.users());
    this.users = userData.users();
  }

  ngOnInit(): void {}
}
