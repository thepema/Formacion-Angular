import { AbstractControl, ValidationErrors } from '@angular/forms';

export function tarjetaValidator(
  group: AbstractControl
): ValidationErrors | null {
  const numero = group.get('numero')?.value;
  const fecha = group.get('validez')?.value;
  if ((numero && !fecha) || (!numero && fecha)) {
    return { tarjetaIncompleta: true };
  }
  return null;
}

export function range(min: number, max: number): ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && (control.value < min || control.value > max)) {
      return { rangoInvalido: true };
    }else {
      return null;
    }
  };
}
