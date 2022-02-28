import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPricesComponent } from './fetch-prices.component';

describe('FetchPricesComponent', () => {
  let component: FetchPricesComponent;
  let fixture: ComponentFixture<FetchPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
