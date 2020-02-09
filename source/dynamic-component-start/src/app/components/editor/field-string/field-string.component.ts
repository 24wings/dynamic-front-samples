import { AFieldComponent } from "../../../core/component-spec/abstract/afield.component";
import { Component, Input } from "@angular/core";

import { IMetaField } from "../../../core/meta/imeta-field.interface";

@Component({
  selector: "field-string",
  templateUrl: "./field-string.component.html"
})
export class FieldStringComponent extends AFieldComponent {
  @Input()
  meta: IMetaField;

}
