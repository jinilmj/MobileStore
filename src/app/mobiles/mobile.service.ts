import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Mobile } from '../models/mobile';

@Injectable({
  providedIn: 'root'
})

export class MobileService {

  private apiUrl = "http://localhost:3003/mobile";

  constructor(private http: HttpClient) {}

  getMobiles(): Observable<Mobile[]> {
    return this.http.get<{ mobiles: Mobile[] }>(this.apiUrl).pipe(
      map(response => response.mobiles)
    );
    
  }
}
