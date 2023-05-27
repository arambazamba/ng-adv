import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private as: FirebaseAuthService) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        passwordRepeat: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordConfirming }
    ),
  });

  registerUser(form: FormGroup) {
    this.as.createUser(form.value.email, form.value.passwords.password);
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } | null {
    if (c.get('password')?.value !== c.get('passwordRepeat')?.value) {
      return { invalid: true };
    }
    return null;
  }
}
