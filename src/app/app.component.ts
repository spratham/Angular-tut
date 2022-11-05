import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'For loop';
  // data= "Learning Angular after rReact";
  // getName(name:any,roll:number){
  //   alert(name)
  //   alert(roll)

  // }
  //   getData(val:string)
  // {
  // console.log(val)
  // }
  // displayVal=``;
  // getValue(val:string)
  // {
  //   console.warn(val)
  //   this.displayVal=val;
  // }

  // count = 0;
  // counter(type: string) {
  //   type === 'plus' ? this.count++ : this.count--;
  // }
  // show= true
  // changeCondition(){
  //   show=!show
  // }

  // color= 'green';

  // users=['anil', 'rajat', 'sahil', 'diwakar', 'pramesh', 'raju'];
  userDetails = [
    {
      name: 'Pratham',
      email: 'Pratham919singh@gmail.com',
      phone: '3412',
      social: ['Fb', 'Insta', 'Snapchat'],
    },
    {
      name: 'rajat',
      email: 'Rajat342@gmail.com',
      phone: '4534',
      social: ['Fb', 'Yahoo', 'GMail'],
    },
  ];
}
