import { IMetaEditor } from "../../meta/imeta-editor.interface";
import { IMetaField } from "../../meta/imeta-field.interface";
import { IEditorComponent } from "../interface/ieditor.component";
export abstract class AEditorComponent implements IEditorComponent {
  meta: IMetaEditor;
}
