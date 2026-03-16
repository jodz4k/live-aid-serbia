import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../../models/campaign';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {
  campaign: Campaign | undefined;

  constructor(private route: ActivatedRoute, private campaignService: CampaignService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.campaignService.getCampaign(id).subscribe(campaign => this.campaign = campaign);
  }

  getProgress(): number {
    if (this.campaign) {
      return (this.campaign.currentAmount / this.campaign.goal) * 100;
    }
    return 0;
  }
}