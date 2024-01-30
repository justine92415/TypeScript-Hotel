import { Icon } from './../../../model/icon';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { SelectComponent } from '../../../components/select/select.component';
import { NgIf } from '@angular/common';
import { DividerComponent } from '../../../divider/divider.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NgIf, ButtonComponent, InputComponent, SelectComponent,DividerComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export default class ProfilePageComponent {
  currentTab: 'profile' | 'order' = 'order';
  changePassword = false;
  editProfile = false;

  get Icon(): typeof Icon {
    return Icon;
  }
}
