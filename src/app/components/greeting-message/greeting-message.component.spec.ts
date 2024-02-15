import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingMessageComponent } from './greeting-message.component';

describe('GreetingMessageComponent', () => {
  let component: GreetingMessageComponent;
  let fixture: ComponentFixture<GreetingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreetingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
