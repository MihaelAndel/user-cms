import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KpiData } from '../../models/kpi-data.model';

@Component({
  selector: 'app-kpi-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-row.component.html',
  styleUrl: './kpi-row.component.scss'
})
export class KpiRowComponent {
  @Input() data!: KpiData[] | null
}
