import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { DialogConfig } from '../../services/dialog-service/dialog-config'
import { DialogRef } from '../../services/dialog-service/dialog.ref'
import { confirmPasswordValidator } from '../../validators/confirm-password.validator'
import { DialogComponent } from '../dialog/dialog.component'
import { PermissionType, User, UserRole } from '../../models/user.model'

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  dialogData = inject(DialogConfig)
  dialogRef = inject(DialogRef)
  formBuilder = inject(FormBuilder)
  dialog = inject(DialogComponent)

  dialogConfirm = this.dialog.onConfirm

  basicData = this.formBuilder.group(
    {
      userID: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: '',
      role: '',
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: [confirmPasswordValidator],
    }
  )

  permissionData = this.formBuilder.group({
    superAdmin: this.formBuilder.group({
      read: false,
      write: false,
      delete: false,
    }),
    admin: this.formBuilder.group({
      read: false,
      write: false,
      delete: false,
    }),
    employee: this.formBuilder.group({
      read: false,
      write: false,
      delete: false,
    }),
  })

  ngOnInit(): void {
    if (this.dialogData.data?.type === 'edit') {
      this.prefillForms(this.dialogData.data.user)
      this.basicData.get('userID')?.disable()
    }
    this.dialogConfirm.subscribe(() => {
      this.confirm()
    })
  }

  prefillForms (user: User) {
    this.basicData.patchValue({
      email: user.email,
      firstName: user.name,
      lastName: user.surname,
      mobile: user.phone,
      password: user.password,
      repeatPassword: user.password,
      userID: user.userID,
      username: user.username,
      role: user.role
    })

    const admin = user.persmissions?.find(p => p.type === PermissionType.ADMIN)
    const superAdmin = user.persmissions?.find(p => p.type === PermissionType.SUPER_ADMIN)
    const employee = user.persmissions?.find(p => p.type === PermissionType.EMPLOYEE)

    this.permissionData.patchValue({
      admin,
      superAdmin,
      employee
    })
  }

  confirm(): void {
    if (this.basicData.status === 'INVALID' || !this.basicData.dirty) {
      for (let control in this.basicData.controls) {
        this.basicData.get(control)?.markAsDirty()
      }
      return
    }
    const basicFormData = this.basicData.getRawValue()
    const permissionFormData = this.permissionData.getRawValue()

    const user: User = {
      userID: basicFormData.userID ?? '',
      email: basicFormData.email ?? '',
      name: basicFormData.firstName ?? '',
      role: basicFormData.role as UserRole ?? UserRole.EMPLOYEE,
      surname: basicFormData.lastName ?? '',
      phone: basicFormData.mobile ?? '',
      password: basicFormData.password ?? '',
      username: basicFormData.username ?? '',
      createDate: new Date().toDateString(),
      persmissions: [
        {
          type: PermissionType.SUPER_ADMIN,
          read: permissionFormData.superAdmin.read ?? false,
          delete: permissionFormData.superAdmin.delete ?? false,
          write: permissionFormData.superAdmin.write ?? false
        },
        {
          type: PermissionType.ADMIN,
          read: permissionFormData.admin.read ?? false,
          delete: permissionFormData.admin.delete ?? false,
          write: permissionFormData.admin.write ?? false
        },
        {
          type: PermissionType.EMPLOYEE,
          read: permissionFormData.employee.read ?? false,
          delete: permissionFormData.employee.delete ?? false,
          write: permissionFormData.employee.write ?? false
        },
      ]
    }

    this.dialogRef.close(user)
  }

  hasError(key: string): boolean {
    const control = this.basicData.get(key)

    if (!control?.dirty) return false

    return control?.errors !== null
  }

  hasPasswordMatchError(): boolean {
    const passwordField = this.basicData.get('password')
    const repeatPasswordField = this.basicData.get('repeatPassword')

    return (
      this.basicData.errors?.['passwordMatch'] &&
      passwordField?.dirty &&
      repeatPasswordField?.dirty
    )
  }
}
