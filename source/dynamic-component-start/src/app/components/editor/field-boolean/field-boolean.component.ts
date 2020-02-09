import { AFieldComponent } from "src/app/core/component-spec/abstract/afield.component";
import { IMetaField } from "../../../core/meta/imeta-field.interface";
import { Component, Input } from "@angular/core";

@Component({
  selector: "field-boolean",
  templateUrl: "./field-boolean.component.html"
})
export class FieldBooleanComponent {
  @Input()
  meta: IMetaField;
  
}
