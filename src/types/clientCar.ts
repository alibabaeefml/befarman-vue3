import type { Trim } from "./trim"; // both the same type
import type { Brand } from "./brand"; // both the same type
import type { Car } from "./car";
import type { City } from "./city";
import type { Color } from "./color";
import type { User } from "./user";
import type { ClientCarStatus } from "./clientCarStatus";
import type { Evaluation } from "./evaluation";
import type { Comment } from "./comment";

export declare interface ClientCar {
  id: number;
  user_id: number;
  name: string;
  painted: string;
  car_number: string;
  color_status: string;
  made_at: number;
  details: string;
  car_usage: string;
  status_id: number;
  contract: string;
  fuel: string;
  changed_parts: string;
  last_oil_change: number;
  insurance_discount: number;
  gps: string;
  befarman_gps: number;
  insurance: number;
  body_insurance: number;
  third_party_insurance: number;
  original_price: number;
  price: number;
  features: string;
  color_id: number;
  thumbnail_300: string;
  thumbnail: string;
  avg_vote: number;
  is_rented: boolean | null;
  car_delivery: boolean;
  instant_booking: boolean;
  fast_reserve: boolean;
  gearbox: string;
  address: string;
  car_price: number;
  city_id?: number | null;
  province_id?: number | null;
  lat: number | null;
  long: number | null;
  organization: string | null;
  technical_status: boolean | null;
  brand?: Brand | null;
  clientCarStatus?: ClientCarStatus;
  clientCarStatuses?: ClientCarStatus[];
  car: Car;
  trim: Trim;
  city: City;
  color: Color;
  user: User;
  images: [];
  evaluation?: Evaluation | null;
  comments?: Comment[];
  requests?: [];
  certificates?: [];
}
