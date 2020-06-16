import { CovidService } from 'src/app/services/covid.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-state-single',
  templateUrl: './state-single.component.html',
  styleUrls: ['./state-single.component.scss']
})
export class StateSingleComponent implements OnInit {
  // Global Vars/
  id; result; table; cardData;
  districtArray = [];
  confirmedArray = [];
  activeArray = [];
  recoveredArray = [];
  deceasedArray = [];
  constructor(
    private actRoute: ActivatedRoute,
    private covidService: CovidService
  ) { }

  ngOnInit() {
    const sub = this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getTData();
    });
    this.getDisttData();
  }

  getTData() {
    this.covidService.getTableData().subscribe((data) => {
      this.result = data['statewise'];
      for (let i = 1; i <= 37; i++) {
        var r = data['statewise'][i];
        if (this.id == r['state']) {
          this.cardData = r;
        }
      }
    });
  }

  getDisttData() {
    this.covidService.getDistrictWiseData().subscribe((data) => {
      var res: [];
      for (let i = 1; i <= 36; i++) {
        res = data[i];
        if (this.id == res['state']) {
          this.table = res['districtData'];
        }
      }

      for (let i of this.table) {
        this.districtArray.push(i['district']);
        this.confirmedArray.push(i['confirmed']);
        this.activeArray.push(i['active']);
        this.recoveredArray.push(i['recovered']);
        this.deceasedArray.push(i['deceased']);
      }
     console.log(this.districtArray);

    });
  }

  // line charts here

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


  lineChartLabels: Label[] = this.districtArray;

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

  // line charts here
}
