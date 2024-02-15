import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type
} from '@angular/core'
import { DialogComponent } from '../../components/dialog/dialog.component'
import { DialogInjector } from './dialog-injector'
import { DialogRef } from './dialog.ref'
import { DialogConfig } from './dialog-config'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogComponentRef!: ComponentRef<DialogComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public open<T>(componentType: Type<any>, data: DialogConfig): DialogRef<T> {
    const dialogRef = this.appendDialogComponentToBody<T>(data)

    this.dialogComponentRef.instance.childComponentType = componentType

    return dialogRef
  }

  private appendDialogComponentToBody<T>(data: DialogConfig): DialogRef<T> {
    const map = new Map()
    map.set(DialogConfig, data)

    const dialogRef = new DialogRef<T>()
    map.set(DialogRef, dialogRef)

    const sub = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody()
      sub.unsubscribe()
    })

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent)
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map))
    this.appRef.attachView(componentRef.hostView)

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
    document.body.appendChild(domElem)

    this.dialogComponentRef = componentRef

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody()
    })
    
    return dialogRef
  }

  private removeDialogComponentFromBody(): void {
    this.appRef.detachView(this.dialogComponentRef.hostView)
    this.dialogComponentRef.destroy()
  }
}