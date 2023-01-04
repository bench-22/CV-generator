import {Component} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'uit-doughnut-chart',
  templateUrl: './donoght-chart.component.html',
  styleUrls: ['./donoght-chart.component.scss']
})
export class DonoghtChartComponent {

  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [350, 450, 100],
        label: 'Series A',
        backgroundColor: ['#7C57F4', '#1CE8C1', '#F4F2ED'],
        hoverBackgroundColor: ['#7248f1', '#13e8bc', '#f5ebe2'],
        hoverBorderColor: ['#7C57F4', '#1CE8C1', '#F4F2ED'],
      },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };

}
