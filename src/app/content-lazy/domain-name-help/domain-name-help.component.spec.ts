import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainNameHelpComponent } from './domain-name-help.component';

describe('DomainNameHelpComponent', () => {
  let component: DomainNameHelpComponent;
  let fixture: ComponentFixture<DomainNameHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainNameHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainNameHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
