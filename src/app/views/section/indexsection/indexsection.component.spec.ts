import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexsectionComponent } from './indexsection.component';

describe('IndexsectionComponent', () => {
  let component: IndexsectionComponent;
  let fixture: ComponentFixture<IndexsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
