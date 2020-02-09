import { IDynamicComponent } from "../component-spec/interface/idynamic.component";
import { IMeta } from "../meta/imeta.inteface";
export interface IComponentRegisterFactory {
  addComponentMapping(
    alias: string,
    component: new () => IDynamicComponent<IMeta>
  );
  remoeComponentMapping(alias);
  getComponentByAlias(alias: string);
}
