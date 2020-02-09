import { Component } from "@angular/core";
import { IMetaEditor } from "../core/meta/imeta-editor.interface";
import { IMetaField } from "../core/meta/imeta-field.interface";

enum TabView {
  Human,
  Robot
}
@Component({
  selector: "r2-component",
  templateUrl: "./r2.component.html",
  styleUrls: ["./r2.component.css"]
})
export class R2Component {
  state: TabView = TabView.Human;
  TabView = TabView;
  newField: IMetaField = {
    alias: "FieldString",
    field: "nickname",
    label: "昵称",
    required: false
  };

  meta: IMetaEditor = {
    alias: "Editor",
    fields: [
      { alias: "FieldString", label: "姓名", field: "name", required: true }
    ]
  };
  finish = true;
  addField() {
    this.meta.fields.push(Object.assign({}, this.newField));
    this.finish = false;
    setTimeout(() => {
      this.finish = true;
    }, 500);
  }
}
