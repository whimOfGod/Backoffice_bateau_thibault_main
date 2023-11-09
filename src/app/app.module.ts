import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Features/header/header.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { FooterComponent } from './Features/footer/footer.component';
import { ProductsService } from './Core/Services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { GraphComponent } from './Pages/graph/graph.component';
import { StatistiqueGraphModule } from './Features/statistique-graph/statistique-graph.module';
import { PieChartModule } from './Features/pie-chart/pie-chart.module';
import { ProduitModule } from './Pages/produit/produit.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailComponent,
    FooterComponent,
    DashboardComponent,
    ConnexionComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    StatistiqueGraphModule,
    PieChartModule,
    ProduitModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
