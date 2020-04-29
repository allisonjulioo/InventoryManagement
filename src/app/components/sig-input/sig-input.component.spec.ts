import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigInputComponent } from './sig-input.component';

describe('SigInputComponent', () => {
  let component: SigInputComponent;
  let fixture: ComponentFixture<SigInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
