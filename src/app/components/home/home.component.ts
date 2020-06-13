import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rituraj;
  constructor(
    private covidservice:CovidService
  ) { }

  ngOnInit() {
    this.covidservice.getTableData().subscribe((data) => {
      this.rituraj = data['statewise'];
    });
  }


}
