import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  @Input() campaigns: Campaign[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}