import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { NotificaitonIconComponent } from '../notificaiton-icon/notificaiton-icon.component';
import { ProfileOverviewComponent } from '../profile-overview/profile-overview.component';

@Component({
  selector: 'app-profile-quick-overview',
  standalone: true,
  imports: [ProfileOverviewComponent, CommonModule, NotificaitonIconComponent],
  templateUrl: './profile-quick-overview.component.html',
  styleUrl: './profile-quick-overview.component.scss'
})
export class ProfileQuickOverviewComponent {
  @Input() user!: User | null
}
