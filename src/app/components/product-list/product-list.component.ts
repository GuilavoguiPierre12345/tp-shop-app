import { Component } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../models/product';
import { ModalProductViewComponent } from "../modal-product-view/modal-product-view.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, NgFor,NgIf, ModalProductViewComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  isDisplayModal : boolean = false;
  targetProduct : Product = {};

  productList : Array<Product> = [
    {
      "name" : "Collection pour femme",
      "nprice" : "$ 28.99",
      "oprice" : "$ 67.99",
      "image" : "product1.avif"
    },
    {
      "name" : "Appareil Photographique",
      "nprice" : "$ 40.99",
      "oprice" : "$ 90.99",
      "image" : "product2.avif"
    },
    {
      "name" : "Chaussure pour femme",
      "nprice" : "$ 12.99",
      "oprice" : "$ 31.90",
      "image" : "product3.avif"
    },
    {
      "name" : "Parfum Channel",
      "nprice" : "$ 12.99",
      "oprice" : "$ 31.90",
      "image" : "product4.avif"
    },
    {
      "name" : "Vello de sport",
      "nprice" : "$ 108.99",
      "oprice" : "$ 167.99",
      "image" : "product5.avif"
    },
    {
      "name" : "Chaussure pour homme",
      "nprice" : "$ 20.99",
      "oprice" : "$ 69.99",
      "image" : "product6.avif"
    },
    {
      "name" : "Colonnel taylor",
      "nprice" : "$ 28.99",
      "oprice" : "$ 61.99",
      "image" : "product7.avif"
    },
    {
      "name" : "Parfum sans marque",
      "nprice" : "$ 12.99",
      "oprice" : "$ 31.90",
      "image" : "product8.avif"
    },
    {
      "name" : "Sac a main pour femme",
      "nprice" : "$ 11.99",
      "oprice" : "$ 42.99",
      "image" : "product9.avif"
    },
    {
      "name" : "Appareil photo complet",
      "nprice" : "$ 89.99",
      "oprice" : "$ 202.99",
      "image" : "product10.avif"
    },
  ]

  handleDisplayProductViewModal(product : Product) {
    if (product) {
      this.targetProduct = product;
      this.isDisplayModal = true;
    }
    
  }

  handleCloseDisplayModal(value : boolean) {
    this.isDisplayModal = value;
  }
}
