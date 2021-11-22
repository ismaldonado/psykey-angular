import { ClientCreateRequest } from './client-create-request';

export interface UserCreateRequest {
  id?: number | null;
  dni: string;
  name: string;
  surname: string;
  phone: number;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  birthdate: Date;
  userType: string;
  employeeId?: number;
  therapyType?: string;
  reason?: string;
  active?: boolean;
  client?: ClientCreateRequest;
}
