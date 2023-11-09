import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ProductsService } from '../../Core/Services/products.service'; // Importez le service

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProductsFromJson().subscribe((data) => {
      const chartData = data.map((product) => ({
        name: product.name, // Utilisez le nom du produit comme catégorie
        y: product.price, // Utilisez la quantité vendue comme valeur
      }));

      const chartOptions: Highcharts.Options = {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: 'Statistiques des ventes',
          align: 'left'
        },
        subtitle: {
          text: 'bateau de thibault',
          align: 'left'
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        series: [{
          name: 'les produits les plus vendus',
          data: chartData,
          type: 'pie'
        }]
      };

      Highcharts.chart('pie-chart-container', chartOptions);
    });
  }
}
