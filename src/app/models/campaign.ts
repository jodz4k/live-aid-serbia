export interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  currentAmount: number;
  artistId: number;
  isActive: boolean;
}