import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-greeting-message',
  standalone: true,
  imports: [],
  templateUrl: './greeting-message.component.html',
  styleUrl: './greeting-message.component.scss'
})
export class GreetingMessageComponent {
  @Input() user!: User | null
}
