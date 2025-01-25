import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerViewComponent } from './cutomer-view.component';

describe('CutomerViewComponent', () => {
  let component: CutomerViewComponent;
  let fixture: ComponentFixture<CutomerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomerViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
