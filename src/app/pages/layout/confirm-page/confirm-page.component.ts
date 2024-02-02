import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { SelectComponent } from '../../../components/select/select.component';
import { DividerComponent } from '../../../components/divider/divider.component';

@Component({
  selector: 'app-confirm-page',
  standalone: true,
  imports: [ButtonComponent,InputComponent,SelectComponent,DividerComponent],
  templateUrl: './confirm-page.component.html',
  styleUrl: './confirm-page.component.scss'
})
export default class ConfirmPageComponent {

}
