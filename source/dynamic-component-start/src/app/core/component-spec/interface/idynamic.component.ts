import { IMeta } from "../../meta/imeta.inteface";
export interface IDynamicComponent<T extends IMeta> {
  meta: T;
}
