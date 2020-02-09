import { IDynamicComponent } from "../component-spec/interface/idynamic.component";
export interface IComponentMapping {
  alias: string;
  component: new () => IDynamicComponent<any>;
}
