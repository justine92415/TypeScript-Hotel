
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonHeroComponent } from '../../../components/button-hero/button-hero.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { Icon } from '../../../model/Icon';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,ButtonHeroComponent,ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {
  get Icon() {
    return Icon;
  }
}
