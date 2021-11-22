import { AdditionalInfoRR } from './additional-info-rr';
import { DiagnosticRR } from './diagnostic-rr';
import { MedicineRR } from './medicine-rr';
import { ReportRR } from './report-rr';
import { TreatmentRR } from './treatment-rr';

export interface ClinicalHistoryRR {
  id?: number;
  patientId: number;
  employeeId: number;
  additionalInfoRR: AdditionalInfoRR;
  medicineRRList?: Array<MedicineRR>;
  diagnosticRRList?: Array<DiagnosticRR>;
  reportRRList?: Array<ReportRR>;
  treatmentRRList?: Array<TreatmentRR>;
}
