export interface SearchResponse {
  id: number;
  dni: string;
  name: string;
  surname: string;
  therapyType?: string;
  userType: string;
  clientFullName?: string;
}
