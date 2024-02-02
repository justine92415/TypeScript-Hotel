import { Component, Input, SimpleChanges } from '@angular/core';
import { Stepper } from '../../model/Stepper';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  @Input({ required: true }) stepArray!: Stepper[];
  @Input({ required: true }) currentStep: number = 1;
}
