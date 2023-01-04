import { Component } from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'uit-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'A' ], [ 'B' ], 'C' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ],
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
