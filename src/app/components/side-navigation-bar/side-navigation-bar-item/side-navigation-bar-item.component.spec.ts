import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationBarItemComponent } from './side-navigation-bar-item.component';

describe('SideNavigationBarItemComponent', () => {
  let component: SideNavigationBarItemComponent;
  let fixture: ComponentFixture<SideNavigationBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
