import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { ProduitComponent } from './Pages/produit/produit.component';
import { DetailsProduitsComponent } from './Pages/details-produits/details-produits.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { GraphComponent } from './Pages/graph/graph.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail',component:DetailComponent },
  { path: 'produit',component:ProduitComponent },
  { path: 'details-produits',component:DetailsProduitsComponent},
  { path: 'connexion',component:ConnexionComponent},
  { path: 'graph',component:GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
