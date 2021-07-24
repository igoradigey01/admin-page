import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailHelpComponent } from './mail-help.component';

describe('MailHelpComponent', () => {
  let component: MailHelpComponent;
  let fixture: ComponentFixture<MailHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
