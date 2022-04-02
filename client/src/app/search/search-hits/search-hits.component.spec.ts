import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHitsComponent } from './search-hits.component';

describe('SearchHitsComponent', () => {
  let component: SearchHitsComponent;
  let fixture: ComponentFixture<SearchHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
