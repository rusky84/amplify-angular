import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaComponent } from './wa.component';

describe('WaComponent', () => {
  let component: WaComponent;
  let fixture: ComponentFixture<WaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
