import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [ProduitComponent],
  imports: [CommonModule],
  providers: [CurrencyPipe], // Ajoutez le CurrencyPipe aux providers
})
export class ProduitModule {}
