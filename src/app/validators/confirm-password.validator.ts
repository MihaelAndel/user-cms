import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.get('password')?.value === control.get('repeatPassword')?.value
    ? null
    : { passwordMatch: true };
};