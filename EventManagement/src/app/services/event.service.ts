import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../core/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080/events'
  constructor(private httpClient:HttpClient) {
   }

   getAllEvents():Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl);
   }

   getEventById(id:number):Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseUrl}/${id}`)
   }

   addEvent( event: Event,id:number): Observable<Event> {
    console.log("cmng inside addEvent",id);
    return this.httpClient.post<Event>(`${this.baseUrl}/user/${id}`, event);
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    return this.httpClient.patch<Event>(`${this.baseUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
