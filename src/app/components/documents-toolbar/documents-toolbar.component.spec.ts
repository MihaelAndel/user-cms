import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsToolbarComponent } from './documents-toolbar.component';

describe('DocumentsToolbarComponent', () => {
  let component: DocumentsToolbarComponent;
  let fixture: ComponentFixture<DocumentsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
