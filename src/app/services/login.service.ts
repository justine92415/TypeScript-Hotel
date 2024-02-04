import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { LoginReq, LoginRes } from '../model/Login';
import { Observable, catchError, shareReplay, tap, throwError } from 'rxjs';
import { BaseRes, User } from '../model/Common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: WritableSignal<User | null> = signal<User | null>(null);
  userInfo:Signal<User | null> = computed(() => this.user());
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
          localStorage.setItem('record', JSON.stringify({ isRecord, email: loginReq.email }));
        } else {
          localStorage.removeItem('record');
        }
        localStorage.setItem('token', res.token);
      }),
      shareReplay()
    );
  }

  getUser(): Observable<BaseRes<User>> | null {
    if (!localStorage.getItem('token')) return null;
    return this.httpClient.get<BaseRes<User>>('https://freyja-gek5.onrender.com/api/v1/user').pipe(
      // tap((userRes) => {
      //   this.user.update((user) => {
      //     return {
      //       ...user,
      //       ...userRes.result,
      //     };
      //   });
      //   console.log(this.user());
      // }),
      catchError(() => this.catchAuthError()),
      shareReplay()
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.user.set(null);
  }

  catchAuthError(): Observable<BaseRes<User>> {
    return throwError(() => this.logout());
  }
}
