import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectorListComponent } from './card-selector-list.component';

describe('CardSelectorListComponent', () => {
  let component: CardSelectorListComponent;
  let fixture: ComponentFixture<CardSelectorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
