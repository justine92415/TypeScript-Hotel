import { Component, inject } from '@angular/core';
import { DividerComponent } from '../../../components/divider/divider.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [DividerComponent, ButtonComponent],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.scss',
})
export default class SuccessPageComponent {
  route = inject(ActivatedRoute);
}
