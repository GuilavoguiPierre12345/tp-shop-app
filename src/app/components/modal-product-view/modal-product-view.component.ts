import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal-product-view',
  standalone: true,
  imports: [],
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent {
  @Output() closeDisplayModal = new EventEmitter<boolean>;
  @Input() product : Product = {};

  closeDisplayProductViewModal() {
    this.closeDisplayModal.emit(false);
  }
}
