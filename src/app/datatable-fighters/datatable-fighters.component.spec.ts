import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableFightersComponent } from './datatable-fighters.component';

describe('DatatableFightersComponent', () => {
  let component: DatatableFightersComponent;
  let fixture: ComponentFixture<DatatableFightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableFightersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableFightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
