import { Component } from '@angular/core';
import { ButtonHeroComponent } from '../../components/button-hero/button-hero.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-components-demo',
  standalone: true,
  imports: [ButtonHeroComponent,ButtonComponent],
  templateUrl: './components-demo.component.html',
  styleUrl: './components-demo.component.scss'
})
export class ComponentsDemoComponent {

}
