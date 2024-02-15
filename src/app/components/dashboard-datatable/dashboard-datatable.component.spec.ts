import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatatableComponent } from './dashboard-datatable.component';

describe('DatatableComponent', () => {
  let component: DashboardDatatableComponent;
  let fixture: ComponentFixture<DashboardDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
