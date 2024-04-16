import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type ListGroupVariant =   
| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'
| 'link';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrl: './listgroup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListgroupComponent { 
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
  @Input() items: object[] = [this.products];
  @Input() variantNew: ListGroupVariant = 'success';
  @Input() variantOld: ListGroupVariant = 'danger';
  @Input() variantDiscontinued: ListGroupVariant = 'warning';
}

