import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { LoginReq, LoginRes } from '../model/Login';
import { Observable, shareReplay, tap } from 'rxjs';
import { User } from '../model/Common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: WritableSignal<User | null> = signal<User | null>(null);
  isLoggedIn = computed(() => this.user() !== null);
  isLoggedOut = computed(() => this.user() === null);
  httpClient = inject(HttpClient);

  postLogin(loginReq: LoginReq, isRecord: boolean): Observable<LoginRes> {
    return this.httpClient.post<LoginRes>('https://freyja-gek5.onrender.com/api/v1/user/login', loginReq).pipe(
      tap((res: LoginRes) => {
        this.user.update((user) => {
          return {
            ...user,
            ...res.result,
          };
        });
        if (isRecord) {
          localStorage.setItem('email', loginReq.email);
        }
        localStorage.setItem('token', res.token);
      }),
      shareReplay()
    );
  }
}
