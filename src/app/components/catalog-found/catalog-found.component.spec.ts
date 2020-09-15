import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFoundComponent } from './catalog-found.component';

describe('CatalogFoundComponent', () => {
  let component: CatalogFoundComponent;
  let fixture: ComponentFixture<CatalogFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
