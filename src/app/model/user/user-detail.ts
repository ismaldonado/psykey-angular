import { ClinicalHistoryRR } from '../clinicalhistory/clinical-history-rr';
import { ClinicalSessionRR } from '../clinicalhistory/clinical-session-rr';

export interface UserDetail {
  id: number;
  name: string;
  surname: string;
  phone: number;
  dni: string;
  birthdate: Date;
  userType: string;
  therapyType: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  reason: string;
  client: UserDetail;
  patientRelationship: string;
  employeeUsername: string;
  employeeId: number;
  clinicalHistoryResponse: ClinicalHistoryRR;
  clinicalSessionResponseList: Array<ClinicalSessionRR>;
}
