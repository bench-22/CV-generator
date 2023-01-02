import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSideComponent } from './sidebar-side.component';

describe('SidebarSideComponent', () => {
  let component: SidebarSideComponent;
  let fixture: ComponentFixture<SidebarSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
