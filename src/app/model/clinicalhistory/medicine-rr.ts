export interface MedicineRR {
  clinicalHistoryId?: number;
  id?: number;
  name: string;
  dose: string;
  startDate: Date;
  endDate: Date;
  comments?: string;
}
