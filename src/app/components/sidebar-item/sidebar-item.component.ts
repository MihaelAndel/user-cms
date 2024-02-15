import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    SvgIconComponent,
    CommonModule
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarItemComponent {
  @Input() icon: string = ''
  @Input() text: string = ''
  @Input() route: string = ''

  sidebarService = inject(SidebarService)

}
