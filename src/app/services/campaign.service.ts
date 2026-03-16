import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign } from '../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>('assets/data/campaigns.json');
  }

  getCampaign(id: number): Observable<Campaign | undefined> {
    return this.getCampaigns().pipe(
      map(campaigns => campaigns.find(c => c.id === id))
    );
  }
}