import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { DetailRes, Room, RoomRes } from '../model/Room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  httpClient = inject(HttpClient);

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<RoomRes>('https://freyja-gek5.onrender.com/api/v1/rooms/').pipe(
      map((res: RoomRes) => res.result),
      shareReplay()
    );
  }

  getRoom(id: string): Observable<Room> {
    return this.httpClient.get<DetailRes>(`https://freyja-gek5.onrender.com/api/v1/rooms/${id}`).pipe(
      map((res: DetailRes) => res.result),
      shareReplay()
    );
  }
}
