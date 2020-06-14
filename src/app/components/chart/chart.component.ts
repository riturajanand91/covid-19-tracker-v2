import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartData;
  testeddata;
  stateArray = [];
  confirmedArray = [];
  activeArray = [];
  recoveredArray = [];
  deceasedArray = [];
  testedArray = [];
  testedArray2 = [];
  constructor(private coviddata: CovidService) { }

  ngOnInit() {
    this.coviddata.getTableData().subscribe((data) => {
      this.chartData = data['statewise'];
      this.testeddata = data['tested'];

      for (let i of this.chartData) {
        this.stateArray.push(i['state']);
        this.confirmedArray.push(i['confirmed']);
        this.activeArray.push(i['active']);
        this.recoveredArray.push(i['recovered']);
        this.deceasedArray.push(i['deaths']);
        // this.testedArray.push(i['active']);
      }
      for (let i of this.testeddata) {
        this.testedArray.push(i['totalsamplestested']);
        this.testedArray2.push(i['updatetimestamp']);

      }
      this.stateArray.shift()
      this.confirmedArray.shift()
      this.activeArray.shift()
      this.recoveredArray.shift()
      this.deceasedArray.shift()

    });
  }

  // ngoninit ends

///Confirmed ++ Active
  lineChartData: ChartDataSets[] = [
    { data: this.confirmedArray, label: 'Confirmed Cases' },
    { data: this.activeArray, label: 'Active Cases' }
  ];

///Recovered ++ Deceased
  lineChartData2: ChartDataSets[] = [
    { data: this.recoveredArray, label: 'Recovered Cases' },
    { data: this.deceasedArray, label: 'Deceased Cases' }
  ];

  lineChartData3: ChartDataSets[] = [
    { data: this.testedArray, label: 'Total Tested Cases' },
    // { data: this.testeddata, label: 'Positive Tested Cases' }
  ];

  lineChartLabels: Label[] = this.stateArray;
  lineChartLabels2: Label[] = this.testedArray2;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  lineChartColors2: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },

  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
