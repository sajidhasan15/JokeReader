import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPartComponent } from './two-part.component';

describe('TwoPartComponent', () => {
  let component: TwoPartComponent;
  let fixture: ComponentFixture<TwoPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
