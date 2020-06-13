import { HttpClient } from '@angular/common/http';
import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  result;
  constructor(
    private coviddata:CovidService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.coviddata.getTableData().subscribe((data) => {
      this.result = data['statewise'];
    });
  }


}
