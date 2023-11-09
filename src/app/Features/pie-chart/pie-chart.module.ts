import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [PieChartComponent],
  exports: [PieChartComponent], // Ajoutez cette ligne pour exporter le composant
})
export class PieChartModule { }
