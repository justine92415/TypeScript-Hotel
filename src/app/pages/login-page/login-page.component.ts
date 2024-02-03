import { Component, OnInit, inject } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { ButtonComponent } from '../../components/button/button.component';
import { LoginService } from '../../services/login.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginForm, LoginFormValue } from '../../model/Form';
import { emailValidator, passwordValidator, requiredValidator } from '../../validators';
import { JsonPipe } from '@angular/common';
import { LoginReq, LoginRes } from '../../model/Login';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputComponent, CheckboxComponent, ButtonComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export default class LoginPageComponent implements OnInit {
  fb = inject(FormBuilder);
  loginService = inject(LoginService);
  router = inject(Router);

  formGroup = this.fb.group<LoginForm>({
    email: this.fb.control('test@gmail.com', { nonNullable: true, validators: emailValidator() }),
    password: this.fb.control('1qazXSW2', { nonNullable: true, validators: requiredValidator('請輸入密碼') }),
    recordEmail: this.fb.control(false, { nonNullable: true }),
  });

  ngOnInit() {}

  login(): void {
    const { email, password, recordEmail } = this.formGroup.value as LoginFormValue;
    const loginReq: LoginReq = {
      email,
      password,
    };
    this.loginService.postLogin(loginReq,recordEmail).subscribe({
      next: (res: LoginRes) => {
        if (res.status) {
          this.router.navigate(['/']);
        }
      },
      error: (err: HttpErrorResponse) => {
        alert(err.error.message);
      },
    });
  }
}
