import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <header class="absolute z-50 w-full bg-transparent px-20 py-6 flex justify-between items-center">
      <img class="w-[12.25rem] h-[4.5rem]" src="/assets/images/desktop/logo.png" alt="" />
      <div class="flex items-center gap-4">
        <app-button [buttonType]="'ghost'">客房旅宿</app-button>
        <app-button [buttonType]="'ghost'">會員登入</app-button>
        <app-button [buttonType]="'primary'">立即訂房</app-button>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  currentPage!: string;
  route = inject(ActivatedRoute);

  ngOnInit(): void {

  }
}
