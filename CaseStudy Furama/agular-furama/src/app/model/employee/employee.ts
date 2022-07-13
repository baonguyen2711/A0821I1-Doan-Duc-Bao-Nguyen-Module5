import {EducationLevel} from "./education-level";
import {Position} from "./position";

export interface Employee {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  identityCard?: number;
  phone?: number;
  email?: string;
  educationLevel?: EducationLevel;
  position?: Position;
  salary?: number;
}
