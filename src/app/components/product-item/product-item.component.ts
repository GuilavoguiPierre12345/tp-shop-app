import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product : Product = {}

  @Output() displayProductViewModal = new EventEmitter<Product>

  handleClickProduct(product : Product | undefined) {
    this.displayProductViewModal.emit(product);
  }

}
