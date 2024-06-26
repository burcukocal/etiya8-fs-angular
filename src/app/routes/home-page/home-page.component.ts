import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule, SharedModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  products = [
    {
      name: 'Samsung Galaxy S10',
      price: 900,
      discontinued: true,
    },
    {
      name: 'Iphone 11',
      price: 1200,
      discontinued: false,
    },
    {
      name: 'Huawei P30',
      price: 800,
      discontinued: false,
    },
  ];
 }
