import { Component, Input, input } from '@angular/core';
import { UserRole } from '../../models/user.model';

@Component({
  selector: 'app-role-chip',
  standalone: true,
  imports: [],
  templateUrl: './role-chip.component.html',
  styleUrl: './role-chip.component.scss'
})
export class RoleChipComponent {
  @Input() userRole!: UserRole

  isAdminUser () {
    return [UserRole.ADMIN, UserRole.HR_ADMIN, UserRole.SUPER_ADMIN]
    .includes(this.userRole)
  }
}
