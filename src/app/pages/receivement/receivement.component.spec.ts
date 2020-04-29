import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivementComponent } from './receivement.component';

describe('ReceivementComponent', () => {
  let component: ReceivementComponent;
  let fixture: ComponentFixture<ReceivementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
