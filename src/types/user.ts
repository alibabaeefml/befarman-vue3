import type { Relative } from "./relative";
import type { Bank } from "./bank";
export declare interface User {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  phone: string;
  is_admin: number;
  thumbnail: string;
  status: string;
  national_code: string;
  verified: number;
  cars_count: number;
  requests_count: number;
  address: string;
  province_id: number;
  born_city: string;
  city_id: number;
  job: string;
  workplace: string;
  born_year: string;
  home_phone: string;
  citizenship: string;
  passport_number: string;
  education_rate: string;
  license_number: string;
  location_type: string;
  work_phone: string;
  relatives: Relative[];
  bank: Bank;
  birthday: string;
  description: string;
  transactions_sum: number;
  avg_vote: number;
}