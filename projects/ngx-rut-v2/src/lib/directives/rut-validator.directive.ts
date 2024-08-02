import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, UntypedFormControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { rutValidate } from '../helpers/rut-helpers';


export function validateRutFactory(rutValidate: Function) {
  return (c: UntypedFormControl) => {
    if (!c.value) {
      return null;
    }
    return rutValidate(c.value) ? null : { invalidRut: true };
  };
}

export function RutValidatorReactive(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if(!control.value) {
      return null;
    }
    return rutValidate(control.value) ? null : { invalidRut: true };
  };
}


@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
  ],
  standalone: true
})
export class RutValidator implements Validator {

  private validator: Function;

  constructor() {
    this.validator = validateRutFactory(rutValidate);
  }

  public validate(c: UntypedFormControl) {
    return this.validator(c);
  }

}
