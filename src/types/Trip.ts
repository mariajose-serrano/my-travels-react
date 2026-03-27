export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  notes?: string;
  imageUrl?: string;
  highlights?: string[];
  details?: string;
}