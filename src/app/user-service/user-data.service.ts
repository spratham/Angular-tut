import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

constructor(private httpClient:HttpClient){}

  getUsers(){

    // const httpHeaders= new HttpHeaders();
    // httpHeaders.append('content-type','application.json')

  return  this.httpClient.get('http://localhost:3003/users');
  }

  // addUser(createBody){   //passing json attribute from the form form
  //   return  this.httpClient.post('http://localhost:3003/users', createBody);
  // }
saveUser(data:any){
  return this.httpClient.post('http://localhost:3003/users',data)
}

}
