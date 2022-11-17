import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users()
  {
   return [
{name:'Anil' , email:'Anila@gmail.com', age: 23},
{name:'Surag' , email:'Surag23@gmail.com', age: 23},
{name:'Pratham' , email:'Pratham12sda@gmail.com', age: 23}

    ]
  }
}
