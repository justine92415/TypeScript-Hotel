import { Injectable, inject } from '@angular/core';
import { OrderReq, OrderRes, Result } from '../model/Order';
import { Observable, map, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  httpClient = inject(HttpClient);

  postLogin(orderReq: OrderReq): Observable<OrderRes> {
    return this.httpClient.post<OrderRes>('https://freyja-gek5.onrender.com/api/v1/orders', orderReq).pipe(
      shareReplay()
    );
  }
}
