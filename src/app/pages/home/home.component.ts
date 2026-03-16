import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../models/campaign';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    console.log('Home component initialized');
    this.campaignService.getCampaigns().subscribe(
      campaigns => {
        console.log('Campaigns loaded:', campaigns);
        this.campaigns = campaigns;
      },
      error => {
        console.error('Error loading campaigns:', error);
      }
    );
  }
}