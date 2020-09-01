import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StamtagComponent } from './stamtag.component';

describe('StamtagComponent', () => {
  let component: StamtagComponent;
  let fixture: ComponentFixture<StamtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StamtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StamtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
