import { Component, Input } from "@angular/core";

import { IMetaEditor } from "../../core/meta/imeta-editor.interface";
import { AEditorComponent } from "src/app/core/component-spec/abstract/aeditor.component";

@Component({ selector: "editor", templateUrl: "./editor.component.html" })
export class EditorComponent extends AEditorComponent {
  @Input()
  meta: IMetaEditor;
}
