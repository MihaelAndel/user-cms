import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { RoleChipComponent } from '../role-chip/role-chip.component';

@Component({
  selector: 'app-dashboard-datatable',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, RoleChipComponent],
  templateUrl: './dashboard-datatable.component.html',
  styleUrl: './dashboard-datatable.component.scss'
})
export class DashboardDatatableComponent {
  @Input() header?: string
  @Input() data!: User[] | null

  @Output() editClicked = new EventEmitter<User>()
}
