import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';

@Component({
  selector: 'app-donation-widget',
  templateUrl: './donation-widget.component.html',
  styleUrls: ['./donation-widget.component.css']
})
export class DonationWidgetComponent implements OnInit {
  @Input() campaign!: Campaign;

  constructor() { }

  ngOnInit(): void {
  }
}