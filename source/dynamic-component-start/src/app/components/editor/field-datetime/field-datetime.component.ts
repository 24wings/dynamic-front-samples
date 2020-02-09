import { AFieldComponent } from "src/app/core/component-spec/abstract/afield.component";
import { IMetaField } from "../../../core/meta/imeta-field.interface";
import { Component, Input } from "@angular/core";

@Component({
  selector: "field-datetime",
  templateUrl: "./field-datetime.component.html"
})
export class FieldDatetimeComponent {
  @Input()
  meta: IMetaField;
}
