import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon } from '../../model/Icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonType: 'primary' | 'secondary' | 'ghost' | 'text' = 'primary';
  @Input() rightIcon?: Icon;
  @Input() leftIcon?: Icon;
  @Input() disabled = false;

  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

  buttonClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    text: 'btn-text',
  };

  onClick(): void {
    if (this.disabled) return;
    this.clickEvent.emit();
  }
}
