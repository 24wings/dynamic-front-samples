import { IMeta } from "./imeta.inteface";
import { IMetaField } from "./imeta-field.interface";
export interface IMetaEditor extends IMeta {
  fields: IMetaField[];
}
