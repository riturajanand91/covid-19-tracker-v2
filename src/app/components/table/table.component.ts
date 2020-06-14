import { HttpClient } from '@angular/common/http';
import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  result = [];
  state: any;
  public $key;
  constructor(
    private coviddata:CovidService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.coviddata.getTableData().subscribe((data) => {
      this.result = data['statewise'];
      this.result.shift()
      // console.log(this.result);

    });
  }
  getSelectedStateData() {
    this.coviddata.getSelectedData(this.state).subscribe((data) => {
      console.log("come here");

      this.$key = this.state;
      console.log(this.$key);

    })
  }
  getSelectedState(state: any) {
    this.state = state;
  }
}
