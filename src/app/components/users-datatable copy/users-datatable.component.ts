import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-users-datatable',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './users-datatable.component.html',
  styleUrl: './users-datatable.component.scss'
})
export class UsersDatatableComponent {
  @Input() header?: string
  @Input() data!: User[] | null
}
