import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputComponent,CheckboxComponent,ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export default class LoginPageComponent {

}
