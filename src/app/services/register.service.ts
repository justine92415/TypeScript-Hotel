import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SignupReq } from '../model/Signup';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpClient = inject(HttpClient);

  constructor() { }

  postSignup(signupReq:SignupReq){
    return this.httpClient.post('https://freyja-gek5.onrender.com/api/v1/user/signup',signupReq);
  }
}
