import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { DatePickerComponent } from '../../../components/date-picker/date-picker.component';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [ButtonComponent,DatePickerComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export default class DetailPageComponent {

}
