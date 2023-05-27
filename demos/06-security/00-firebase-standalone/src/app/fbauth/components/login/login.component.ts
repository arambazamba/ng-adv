import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from '../../credential.model';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private as: FirebaseAuthService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  logIn(form: FormGroup) {
    let vm: LoginCredentials = form.value;
    this.as.logIn(vm.email, vm.password);
  }
}
