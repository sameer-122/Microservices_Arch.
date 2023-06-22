import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepProfileComponent } from './dep-profile.component';

describe('DepProfileComponent', () => {
  let component: DepProfileComponent;
  let fixture: ComponentFixture<DepProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
