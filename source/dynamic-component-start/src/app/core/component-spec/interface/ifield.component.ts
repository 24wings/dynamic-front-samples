import { IMetaField } from "../../meta/imeta-field.interface";
import { IDynamicComponent } from "./idynamic.component";
export interface IFieldComponent extends IDynamicComponent<IMetaField> {
  meta: IMetaField;
}
