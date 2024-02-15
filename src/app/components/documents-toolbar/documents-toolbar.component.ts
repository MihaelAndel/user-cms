import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-documents-toolbar',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './documents-toolbar.component.html',
  styleUrl: './documents-toolbar.component.scss'
})
export class DocumentsToolbarComponent {

}
