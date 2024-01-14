import { Component, Input } from '@angular/core';
import { Icon } from '../../model/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonType: 'primary' | 'secondary' | 'ghost' | 'text' = 'primary';
  @Input() iconName?: Icon;
  @Input() disabled = false;
}
