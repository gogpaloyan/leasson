import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorelesstextComponent } from './morelesstext.component';

describe('MorelesstextComponent', () => {
  let component: MorelesstextComponent;
  let fixture: ComponentFixture<MorelesstextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorelesstextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorelesstextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
