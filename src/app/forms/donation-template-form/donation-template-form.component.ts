import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donation-template-form',
  templateUrl: './donation-template-form.component.html',
  styleUrls: ['./donation-template-form.component.css']
})
export class DonationTemplateFormComponent implements OnInit {
  @Input() campaign!: Campaign;

  donation = {
    name: '',
    email: '',
    amount: 0,
    message: '',
    anonymous: false
  };

  isSubmitting = false;
  submitSuccess = false;

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitting = true;
    this.submitSuccess = false;

    const donationData = {
      id: Date.now(),
      campaignId: this.campaign.id,
      donorName: this.donation.anonymous ? 'Anonymous' : this.donation.name,
      email: this.donation.anonymous ? '' : this.donation.email,
      amount: this.donation.amount,
      message: this.donation.message,
      anonymous: this.donation.anonymous
    };

    this.donationService.addDonation(donationData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        setTimeout(() => this.submitSuccess = false, 5000);
      },
      error: () => {
        this.isSubmitting = false;
        alert('Donation failed. Please try again.');
      }
    });
  }

  private resetForm() {
    this.donation = {
      name: '',
      email: '',
      amount: 0,
      message: '',
      anonymous: false
    };
  }
}