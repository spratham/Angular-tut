import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
// inputs:['item'], //way 1

})
export class LoginComponent implements OnInit {
// item:any;       //way 1
  constructor() { }
 @ Input() item:any;  //value could be random -input decorator  //way 2
  ngOnInit(): void {
  }

}
