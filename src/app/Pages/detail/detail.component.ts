import { Component } from '@angular/core';
import { Product } from 'src/app/Core/Models/product';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product: Product | undefined;

  constructor(private productService: ProductsService, private router: Router) {}
  
}
