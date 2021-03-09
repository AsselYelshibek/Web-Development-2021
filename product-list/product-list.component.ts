import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../app.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  constructor() { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
  // tslint:disable-next-line:typedef
  createRange(rating: number){
    const items: number[] = [];
    for (let i = 1; i <= Math.round(rating); i++){
      items.push(i);
    }
    return items;
  }
  // tslint:disable-next-line:typedef
  openLink(link: string | undefined) {
    window.open(link);
  }
  // tslint:disable-next-line:typedef
  share(index: string | number) {
    // @ts-ignore
    this.products[index].share = !this.products[index].share;
  }
}
