import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { DataService } from '../../services/data-service/data-service.service';
import { ProfileQuickOverviewComponent } from '../profile-quick-overview/profile-quick-overview.component';
import { GreetingMessageComponent } from '../greeting-message/greeting-message.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ProfileQuickOverviewComponent,
    GreetingMessageComponent
  ],
  providers: [DataService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  dataService = inject(DataService)

  currentUser = this.dataService.getCurrentUser()
}
