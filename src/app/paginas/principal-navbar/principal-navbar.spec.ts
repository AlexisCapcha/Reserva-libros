import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalNavbar } from './principal-navbar';

describe('PrincipalNavbar', () => {
  let component: PrincipalNavbar;
  let fixture: ComponentFixture<PrincipalNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
