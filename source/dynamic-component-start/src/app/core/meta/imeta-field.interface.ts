import { IMeta } from "./imeta.inteface";
export interface IMetaField extends IMeta {
  field: string;
  label: string;
  required: boolean;
}
