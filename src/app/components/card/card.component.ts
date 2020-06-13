import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidService } from './../../services/covid.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  carddata;
  testeddata;
  constructor(
    private coviddata: CovidService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.coviddata.getTableData().subscribe((data) => {
      this.carddata = data['statewise'];
      this.testeddata = data['tested'];
    });
  }

}
