import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchLayoutComponent } from './flight-search-layout.component';

describe('FlightSearchLayoutComponent', () => {
  let component: FlightSearchLayoutComponent;
  let fixture: ComponentFixture<FlightSearchLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
