import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { range, tarjetaValidator } from './tarjeta.validator';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../../core/store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenador-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './entrenador-form.component.html',
  styleUrl: './entrenador-form.component.scss'
})
export class EntrenadorFormComponent {
  entrenadorForm: FormGroup;
  tarjeta: FormGroup;

  // ejemplo: string = 'Ejemplo de texto para el formulario';

  constructor(private fb: FormBuilder,private readonly storeService: StoreService, private router: Router) {
    this.tarjeta =  this.fb.group({
        numero: ['', [Validators.minLength(7), Validators.maxLength(7) , Validators.pattern('^[0-9]{7}$')]],
        validez: [null, range(1,5)],
      }
      ,{ validators: tarjetaValidator })
    this.entrenadorForm = this.fb.group({
      nombre: ['', Validators.required],
      tarjetaDeEntrenador: this.tarjeta,
      edad: [18, [Validators.required, Validators.min(10), Validators.max(99)]],
      region: ['', Validators.required],
      genero: ['', Validators.required],
      pokedex: [false]
    });
  }

  onSubmit() {
    if (this.entrenadorForm.valid) {
      console.log('Datos del entrenador:', this.entrenadorForm.value);
      this.storeService.setEntrenador(this.entrenadorForm.value);
      this.router.navigate(['/']);
    } else {
      this.entrenadorForm.markAllAsTouched();
    }
  }
}
