import { Component } from '@angular/core';
import { UserDataService } from '../user-service/user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: any;
  constructor(public userService: UserDataService) {}


  userSubmit(item:any){
console.log(item)  //data we fill in form
this.userService.saveUser(item).subscribe((data)=>{
  console.warn(data) //form data that we send to server
})
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });

  }
}
