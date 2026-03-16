import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor() { }

  addDonation(donation: Donation): Observable<Donation> {
    // Simulate adding donation
    console.log('Donation added', donation);
    return of(donation);
  }
}