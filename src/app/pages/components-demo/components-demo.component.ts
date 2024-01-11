import { Component } from '@angular/core';
import { ButtonHeroComponent } from '../../components/button-hero/button-hero.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SelectComponent } from '../../components/select/select.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-components-demo',
  standalone: true,
  imports: [ButtonHeroComponent,ButtonComponent,SelectComponent,CheckboxComponent,InputComponent],
  templateUrl: './components-demo.component.html',
  styleUrl: './components-demo.component.scss'
})
export class ComponentsDemoComponent {

}
