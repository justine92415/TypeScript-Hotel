import { Icon } from './../../model/icon';
import { Component } from '@angular/core';
import { ButtonHeroComponent } from '../../components/button-hero/button-hero.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SelectComponent } from '../../components/select/select.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { InputComponent } from '../../components/input/input.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { CalenderComponent } from '../../components/calender/calender.component';
import { DatePickerInputComponent } from '../../components/date-picker-input/date-picker-input.component';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';

@Component({
  selector: 'app-components-demo',
  standalone: true,
  imports: [
    ButtonHeroComponent,
    ButtonComponent,
    SelectComponent,
    CheckboxComponent,
    InputComponent,
    StepperComponent,
    CalenderComponent,
    DatePickerInputComponent,
    DatePickerComponent,
  ],
  templateUrl: './components-demo.component.html',
  styleUrl: './components-demo.component.scss',
})
export class ComponentsDemoComponent {
  get Icon(): typeof Icon {
    return Icon;
  }
}
