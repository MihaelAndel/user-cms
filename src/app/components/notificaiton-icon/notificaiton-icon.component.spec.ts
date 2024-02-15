import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificaitonIconComponent } from './notificaiton-icon.component';

describe('NotificaitonIconComponent', () => {
  let component: NotificaitonIconComponent;
  let fixture: ComponentFixture<NotificaitonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificaitonIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificaitonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
