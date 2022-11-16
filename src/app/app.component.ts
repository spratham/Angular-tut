import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reactive-forms';
loginForm= new FormGroup({              //loginForm is name of the form we can use any name
user:new FormControl(''),
password:new FormControl('')
})
userSubmit(){
  console.log(this.loginForm.value)
}
}
