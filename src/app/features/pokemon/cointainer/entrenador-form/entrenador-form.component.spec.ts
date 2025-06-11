import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorFormComponent } from './entrenador-form.component';

describe('EntrenadorFormComponent', () => {
  let component: EntrenadorFormComponent;
  let fixture: ComponentFixture<EntrenadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
