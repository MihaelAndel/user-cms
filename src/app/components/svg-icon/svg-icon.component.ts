import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { iconMapping } from '../../data/icons'

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input() fill: string = ''
  @Input() iconName: string = ''

  sanitizer = inject(DomSanitizer)

  getSvg () {
    return this.sanitizer.bypassSecurityTrustHtml(iconMapping[this.iconName] ?? iconMapping['placeholder'])
  }
}
