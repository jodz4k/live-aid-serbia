export interface Donation {
  id: number;
  campaignId: number;
  donorName: string;
  email: string;
  amount: number;
  message: string;
}