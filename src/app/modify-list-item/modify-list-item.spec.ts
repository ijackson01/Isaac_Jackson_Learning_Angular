import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyListItem } from './modify-list-item';

describe('ModifyListItem', () => {
  let component: ModifyListItem;
  let fixture: ComponentFixture<ModifyListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
