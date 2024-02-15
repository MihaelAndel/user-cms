import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from '../../services/data-service/data-service.service';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, SidebarItemComponent, SvgIconComponent],
  providers: [DataService],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuComponent {
  dataService = inject(DataService)
  sidebarService = inject(SidebarService)
  sidebarData$ = this.dataService.getSidebarData()

  navItems$ = this.sidebarData$.pipe(map(data => data.navItems))
  specialItems$ = this.sidebarData$.pipe(map(data => data.specialItems))

  toggleSidebar (): void {
    this.sidebarService.toggleSidebar()
  }
}
