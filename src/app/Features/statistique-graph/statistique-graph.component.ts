import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ProductsService } from '../../Core/Services/products.service';

@Component({
  selector: 'app-statistique-graph',
  templateUrl: './statistique-graph.component.html',
  styleUrls: ['./statistique-graph.component.css']
})
export class StatistiqueGraphComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProductsFromJson().subscribe((data) => {
      const chartData = data.map((product) => ({
        name: product.name,
        y: product.price,
      }));
  
      const chart = Highcharts.chart('container', {
        title: {
          text: 'Statistique des chiffres d\'affaire',
          align: 'left'
        },
        subtitle: {
          text: 'Chart option: Plain | Source: <a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige" target="_blank">NAV</a>',
          align: 'left'
        },
        colors: ['#4caefe', '#3fbdf3', '#35c3e8', '#2bc9dc', '#20cfe1', '#16d4e6', '#0dd9db', '#03dfd0', '#00e4c5', '#00e9ba', '#00eeaf', '#23e274'],
        xAxis: {
          categories: chartData.map((item) => item.name),
        },
        yAxis: {
          title: {
            text: 'Chiffre d\'affaire'
          }
        },
        series: [{
          type: 'column',
          name: 'Chiffre d\'affaire',
          data: chartData,
          showInLegend: false
        }]
      });
  
      document.getElementById('plain')?.addEventListener('click', () => {
        chart.update({
          chart: {
            inverted: false,
            polar: false
          },
          subtitle: {
            text: 'Chart option: Plain | Source: <a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige" target="_blank">NAV</a>'
          }
        });
      });
  
      document.getElementById('inverted')?.addEventListener('click', () => {
        chart.update({
          chart: {
            inverted: true,
            polar: false
          },
          subtitle: {
            text: 'Chart option: Inverted | Source: <a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige" target="_blank">NAV</a>'
          }
        });
      });
  
      document.getElementById('polar')?.addEventListener('click', () => {
        chart.update({
          chart: {
            inverted: false,
            polar: true
          }
        });
      });
    });
  }
}  
