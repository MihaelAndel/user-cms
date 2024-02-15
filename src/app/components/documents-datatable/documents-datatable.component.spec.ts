import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDatatableComponent } from './documents-datatable.component';

describe('DocumentsDatatableComponent', () => {
  let component: DocumentsDatatableComponent;
  let fixture: ComponentFixture<DocumentsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
