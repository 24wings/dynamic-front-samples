import { AFieldComponent } from "src/app/core/component-spec/abstract/afield.component";
import { IMetaField } from "../../../core/meta/imeta-field.interface";
import { Component, Input } from "@angular/core";

@Component({
  selector: "field-number",
  templateUrl: "./field-number.component.html"
})
export class FieldNumberComponent extends AFieldComponent {
  @Input()
  meta: IMetaField;
  
}
