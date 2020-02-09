import {
  Input,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  Type,
  Output,
  EventEmitter,
  ComponentRef
} from "@angular/core";
import { IDynamicComponent } from "../../core/component-spec/interface/idynamic.component";
import { IMeta } from "../../core/meta/imeta.inteface";
import { DynamicDirective } from "src/app/directives/dynamic.directive";
import { ComponentRegisterFactory } from "src/app/core/service/component.register-factory.service";
type DynamicComponentRef = ComponentRef<IDynamicComponent<IMeta>>;
@Component({
  selector: "dynamic-component",
  templateUrl: "./dynamic-component.html"
})
export class DynamicComponent implements IDynamicComponent<IMeta> {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentRegisterFactory: ComponentRegisterFactory
  ) {}
  @Input() meta: IMeta;
  ngOnInit(): void {
    this.loadComponent();
  }
  instance: IDynamicComponent<IMeta>;

  ngAfterViewInit(): void {}
  @ViewChild(DynamicDirective, { static: true }) dynamicHost: DynamicDirective;
  interval: any;
  loadComponent() {
    let findComponent = this.componentRegisterFactory.getComponentByAlias(
      this.meta.alias
    );

    if (findComponent) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        (findComponent as any) as Type<IDynamicComponent<IMeta>>
      );
      let viewContainerRef = this.dynamicHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef: DynamicComponentRef = viewContainerRef.createComponent(
        componentFactory
      );
      this.instance = componentRef.instance;
      this.instance.meta = this.meta;
      componentRef.changeDetectorRef.detectChanges();
    } else {
      throw Error("尚未找到注册组件");
    }
  }
}
