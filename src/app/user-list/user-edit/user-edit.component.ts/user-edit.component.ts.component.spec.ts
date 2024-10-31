import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditComponentTsComponent } from './user-edit.component.ts.component';

describe('UserEditComponentTsComponent', () => {
  let component: UserEditComponentTsComponent;
  let fixture: ComponentFixture<UserEditComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditComponentTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
