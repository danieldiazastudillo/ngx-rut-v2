# ngx-rut-v2

Basado en [ngx-rut](https://github.com/danieldiazastudillo/ngx-rut) pero usando Angular con compontentes, directivas y validaciones _standalone_. Para uso en Angular con módulos se recomienda esa versión.

Valida y formatea [RUT Chilenos](https://en.wikipedia.org/wiki/National_identification_number#Chile)

## Compatibilidad

| Versión ngx-rut-v2 | Versión Angular |
|--------------------|-----------------|
| 1.5.0              | 18              |
| 1.6.0              | 19              |

## Installation

```bash
npm install --save ngx-rut-v2
```


## Set-up:

Se deben importar las funciones, directivas & pipes directamente (standalones)

```typescript
...
import { RutValidatorReactive, RutDirective, RutPipe } from 'ngx-rut-v2';
...

@Component({
  selector: 'app-some-component',
  standalone: true, //IMPORTANTE!
  imports: [    
    RutValidatorReactive,
    RutDirective,
    RutPipe
  ] 
})
class SomeComponent { }
```


## Uso

El paquete expone diversas funciones de validación de RUTs. Sin embargo se recomienda usar:
- `RutValidatorReactive`: Clase que implementa `Validator` para ser usada en formularios reactivos.
- `RutValidator`: Expone la directiva `validateRut` (para `NgModel` o `inputs` en _Template-Driven Forms_)
- `RutPipe`: Expone el _pipe_ para formatear texto como RUT
- `RutDirective`: Expone la directiva `formatRut` para formateo de `inputs`


### Reactive Forms

#### Componente
```typescript
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidatorReactive } from 'ngx-rut-v2';
export class DemoAppComponent {
  constructor () {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, RutValidatorReactive()]]
    });
  }
}
```

#### Template

##### Rut Pipe (standalone)

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
```

##### formatRut (Directiva para inputs)
```html
<input [(ngModel)]="user.rut" name="rut" formatRut required>
<!--
(on blur)
3.097.219-8

(on focus)
30972198
-->
```
##### Error Form

>IMPORTANTE: Por defecto el error que retorna la validación es `invalidRut`

```html
<mat-form-field>
  <mat-label>RUT</mat-label>
  <input matInput formControlName="rut" formatRut />
  @if (mainForm.get('rut')?.hasError('invalidRut')) {
    <mat-error>El RUT ingresado es <strong>inválido</strong></mat-error>
  }
</mat-form-field>
```

##### Template-Driven Forms
```html
<input [(ngModel)]="user.rut" name="rut" validateRut required>
```




