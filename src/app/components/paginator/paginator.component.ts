import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() currentPage!: number
  @Input() numberOfPages!: number
  
  @Output() itemsPerPage = new EventEmitter<number>()
  @Output() nextPage = new EventEmitter<void>()
  @Output() previousPage = new EventEmitter<void>()
}
