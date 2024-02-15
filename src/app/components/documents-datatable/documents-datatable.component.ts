import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { Document } from '../../models/document.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents-datatable',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './documents-datatable.component.html',
  styleUrl: './documents-datatable.component.scss'
})
export class DocumentsDatatableComponent {
  @Input() data?: Document[] | null
}
