import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("user id is", this.route.snapshot.paramMap.get('id'));  //getting the id
    this.userId = this.route.snapshot.paramMap.get('id');            //displaying
  }
}
