import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiRowComponent } from './kpi-row.component';

describe('KpiRowComponent', () => {
  let component: KpiRowComponent;
  let fixture: ComponentFixture<KpiRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KpiRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
