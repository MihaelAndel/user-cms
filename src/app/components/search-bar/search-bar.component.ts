import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, SvgIconComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() add?: string
  @Input() savedSearch?: boolean

  @Output() searched = new EventEmitter<string>()
  @Output() addActionClicked = new EventEmitter<void>()
  @Output() sorted = new EventEmitter<any>()

  text = ''

  addButtonClicked () {
    this.addActionClicked.next()
  }

  searchChanged (event: string) {
    this.searched.emit(event)
  }
}
