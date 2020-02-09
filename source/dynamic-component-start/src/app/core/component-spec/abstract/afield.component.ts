import { IMetaField } from "../../meta/imeta-field.interface";
import { IFieldComponent } from "../interface/ifield.component";
export abstract class AFieldComponent implements IFieldComponent {
  meta: IMetaField;
}
