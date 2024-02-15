import {
  Component,
  Type,
  OnDestroy,
  AfterViewInit,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  inject
} from '@angular/core'
import { Subject } from 'rxjs'
import { InsertionDirective } from '../../services/dialog-service/insertion.directive'
import { DialogRef } from '../../services/dialog-service/dialog.ref'
import { DialogConfig } from '../../services/dialog-service/dialog-config'
import { CommonModule } from '@angular/common'
import { SvgIconComponent } from '../svg-icon/svg-icon.component'

@Component({
  templateUrl: './dialog.component.html',
  imports: [InsertionDirective, CommonModule, SvgIconComponent],
  standalone: true,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  componentRef!: ComponentRef<any>
  childComponentType!: Type<any>

  @ViewChild(InsertionDirective) insertionPoint!: InsertionDirective

  private readonly _onClose = new Subject<any>()
  public onClose = this._onClose.asObservable()
  private readonly _onConfirm = new Subject<any>()
  public onConfirm = this._onConfirm.asObservable()

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef<any>
  ) { }

  dialogConfig = inject(DialogConfig)

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType)
    this.cd.detectChanges()
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy()
    }
  }

  onOverlayClicked(evt: MouseEvent): void {
    this.dialogRef.close()
  }

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType)

    let viewContainerRef = this.insertionPoint.viewContainerRef
    viewContainerRef.clear()

    this.componentRef = viewContainerRef.createComponent(componentFactory)
  }

  close(): void {
    this._onClose.next(null)
  }

  confirm (): void {
    this._onConfirm.next(null)
  }
}