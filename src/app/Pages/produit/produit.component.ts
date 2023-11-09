import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/Services/products.service';
import { Product } from '../../Core/Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1; // Page actuelle
  itemsPerPage: number = 6; // limitation du nombre d'article par page
  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductsFromJson().subscribe((data) => {
      this.products = data;
    });
  }

  showMoreDetailProduct() {
    console.log('toto');
    this.router.navigate(['/detail']);
  }

  getCurrentPageProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }
  
  getPages() {
    const pageCount = Math.ceil(this.products.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, i) => i + 1);
  }
  
  setCurrentPage(page: number) {
    this.currentPage = page;
  }
  
}
