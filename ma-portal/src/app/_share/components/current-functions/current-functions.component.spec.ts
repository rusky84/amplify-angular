import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFunctionsComponent } from './current-functions.component';

describe('CurrentFunctionsComponent', () => {
  let component: CurrentFunctionsComponent;
  let fixture: ComponentFixture<CurrentFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
