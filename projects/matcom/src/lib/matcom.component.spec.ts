import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcomComponent } from './matcom.component';

describe('MatcomComponent', () => {
  let component: MatcomComponent;
  let fixture: ComponentFixture<MatcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
