import { IDynamicComponent } from "../component-spec/interface/idynamic.component";
import { IComponentRegisterFactory } from "./icomponent-register-factory.interface";
import { IComponentMapping } from "../meta/component-mapping";
import { IMeta } from "../meta/imeta.inteface";
import { FieldStringComponent } from "../../components/editor/field-string/field-string.component";
import { FieldNumberComponent } from "../../components/editor/field-number/field-number.component";
import { FieldDatetimeComponent } from "../../components/editor/field-datetime/field-datetime.component";
import { FieldBooleanComponent } from "../../components/editor/field-boolean/field-boolean.component";
export class ComponentRegisterFactory implements IComponentRegisterFactory {
  private componentMappings: IComponentMapping[] = [
    { alias: "FieldString", component: FieldStringComponent },
    { alias: "FieldNumber", component: FieldNumberComponent },
    { alias: "FieldDatetime", component: FieldDatetimeComponent },
    { alias: "FieldBoolean", component: FieldBooleanComponent }
  ];
  addComponentMapping(
    alias: string,
    component: new () => IDynamicComponent<IMeta>
  ) {
    this.componentMappings.push({ alias, component });
  }
  remoeComponentMapping(alias: string) {
    let index = this.componentMappings.findIndex(
      mapping => mapping.alias == alias
    );
    if (index != -1) {
      this.componentMappings.splice(index, 1);
    }
  }
  getComponentByAlias(alias: string): new () => IDynamicComponent<IMeta> {
    let componenMapping = this.componentMappings.find(
      mapping => mapping.alias == alias
    );
    return componenMapping ? componenMapping.component : null;
  }
}
