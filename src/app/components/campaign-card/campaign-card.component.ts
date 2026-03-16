import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.css']
})
export class CampaignCardComponent implements OnInit {
  @Input() campaign!: Campaign;

  constructor() { }

  ngOnInit(): void {
  }

  getProgress(): number {
    return (this.campaign.currentAmount / this.campaign.goal) * 100;
  }
}