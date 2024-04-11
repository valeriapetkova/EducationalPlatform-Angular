import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator (
    passwordControlName: string,
    repeatPasswordControlName: string
): ValidatorFn {
    return (control) => {
        const passwordFormControl = control.get(passwordControlName);
        const repeatPasswordFormControl = control.get(repeatPasswordControlName);
        const areMatching = passwordFormControl?.value == repeatPasswordFormControl?.value;

        return areMatching ? null : { matchPasswordsValidator: true };
    };
}