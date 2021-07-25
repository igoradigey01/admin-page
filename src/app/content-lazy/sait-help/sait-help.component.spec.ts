import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaitHelpComponent } from './sait-help.component';

describe('SaitHelpComponent', () => {
  let component: SaitHelpComponent;
  let fixture: ComponentFixture<SaitHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaitHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaitHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
