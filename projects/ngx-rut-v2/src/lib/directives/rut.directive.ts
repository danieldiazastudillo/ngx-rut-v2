import { Directive, HostListener } from '@angular/core';
import { rutClean, rutFormat } from '../helpers/rut-helpers';

@Directive({
  selector: '[formatRut]',
  standalone: true
})
export class RutDirective {
  @HostListener('focus', ['$event.target'])
  onFocus(input: HTMLInputElement) {
    input.value = rutClean(input.value);
  }

  @HostListener('blur', ['$event.target'])
  onBlur(input: HTMLInputElement) {
    input.value = rutFormat(input.value) || '';
  }
}
