export interface ClientCreateRequest {
  id?: number | null;
  dni: string;
  name: string;
  surname: string;
  phone: number;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  userType: string;
  patientRelationship?: string;
  active?: boolean;
}
