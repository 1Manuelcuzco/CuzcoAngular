import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpacientesComponent } from './postpacientes.component';

describe('PostpacientesComponent', () => {
  let component: PostpacientesComponent;
  let fixture: ComponentFixture<PostpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
