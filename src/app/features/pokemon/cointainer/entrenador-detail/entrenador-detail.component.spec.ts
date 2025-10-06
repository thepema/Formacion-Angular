import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorDetailComponent } from './entrenador-detail.component';

describe('EntrenadorDetailComponent', () => {
  let component: EntrenadorDetailComponent;
  let fixture: ComponentFixture<EntrenadorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
