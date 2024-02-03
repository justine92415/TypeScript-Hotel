import { SignupRes } from './../model/Signup';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SignupReq } from '../model/Signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  httpClient = inject(HttpClient);

  constructor() {}

  postSignup(signupReq: SignupReq): Observable<SignupRes> {
    return this.httpClient.post<SignupRes>('https://freyja-gek5.onrender.com/api/v1/user/signup', signupReq);
  }
}
