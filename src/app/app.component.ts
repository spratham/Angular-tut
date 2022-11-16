import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reactive-forms-validations';
loginForm= new FormGroup({              //loginForm is name of the form we can use any name
user:new FormControl('', [Validators.required, Validators.email]),
password:new FormControl('', [Validators.required,Validators.pattern(
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/              //should have min characters with small larger chars, spl char and number
)])
})
userSubmit(){
  console.log(this.loginForm.value)
}

get user(){
return this.loginForm.get('user')
}
get password(){
  return this.loginForm.get('password')
  }
}
