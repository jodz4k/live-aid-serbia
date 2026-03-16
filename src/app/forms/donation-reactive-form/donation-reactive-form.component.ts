import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campaign } from '../../models/campaign';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donation-reactive-form',
  templateUrl: './donation-reactive-form.component.html',
  styleUrls: ['./donation-reactive-form.component.css']
})
export class DonationReactiveFormComponent implements OnInit {
  @Input() campaign!: Campaign;
  donationForm: FormGroup;

  constructor(private fb: FormBuilder, private donationService: DonationService) {
    this.donationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      amount: [0, [Validators.required, Validators.min(5)]],
      message: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.donationForm.valid) {
      this.donationService.addDonation({
        id: Date.now(),
        campaignId: this.campaign.id,
        donorName: this.donationForm.value.name,
        email: this.donationForm.value.email,
        amount: this.donationForm.value.amount,
        message: this.donationForm.value.message
      }).subscribe(() => {
        alert('Donation submitted!');
        this.donationForm.reset();
      });
    }
  }
}