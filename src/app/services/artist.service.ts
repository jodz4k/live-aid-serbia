import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('assets/data/artists.json');
  }

  getArtist(id: number): Observable<Artist | undefined> {
    return this.getArtists().pipe(
      map(artists => artists.find(a => a.id === id))
    );
  }
}