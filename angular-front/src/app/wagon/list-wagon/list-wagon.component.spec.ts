import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWagonComponent } from './list-wagon.component';

describe('ListWagonComponent', () => {
  let component: ListWagonComponent;
  let fixture: ComponentFixture<ListWagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWagonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
