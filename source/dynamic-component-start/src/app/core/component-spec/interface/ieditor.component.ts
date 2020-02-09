import { IMetaEditor } from "../../meta/imeta-editor.interface";
import { IDynamicComponent } from "./idynamic.component";
import { IMetaField } from "../../meta/imeta-field.interface";
export interface IEditorComponent extends IDynamicComponent<IMetaEditor> {
  meta: IMetaEditor;
}
