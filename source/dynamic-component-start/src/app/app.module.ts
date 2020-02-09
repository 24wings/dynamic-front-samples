import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FieldStringComponent } from "./components/editor/field-string/field-string.component";
import { EditorComponent } from "./components/editor/editor.component";
import { DynamicComponent } from "./components/dynamic-component/dynamic-component";
import { FieldDatetimeComponent } from "./components/editor/field-datetime/field-datetime.component";
import { FieldBooleanComponent } from "./components/editor/field-boolean/field-boolean.component";
import { FieldNumberComponent } from "./components/editor/field-number/field-number.component";
import { R2Component } from "./components/r2.component";
import { DynamicDirective } from "./directives/dynamic.directive";
import { ComponentRegisterFactory } from "./core/service/component.register-factory.service";
import { CommonModule } from "@angular/common";

const COMPONENTS = [
  FieldStringComponent,
  FieldDatetimeComponent,
  FieldBooleanComponent,
  FieldNumberComponent,
  EditorComponent,
  DynamicComponent,
  R2Component
];
@NgModule({
  declarations: [AppComponent, ...COMPONENTS, DynamicDirective],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [ComponentRegisterFactory],
  bootstrap: [AppComponent],
  entryComponents: [...COMPONENTS]
})
export class AppModule {}
