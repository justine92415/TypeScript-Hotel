import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { InputComponent } from '../../components/input/input.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [InputComponent,CheckboxComponent,ButtonComponent,StepperComponent,SelectComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export default class RegisterPageComponent {
  step = 2;
}
