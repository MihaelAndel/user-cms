import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileQuickOverviewComponent } from './profile-quick-overview.component';

describe('ProfileQuickOverviewComponent', () => {
  let component: ProfileQuickOverviewComponent;
  let fixture: ComponentFixture<ProfileQuickOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileQuickOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileQuickOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
