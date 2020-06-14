import { HttpClient } from '@angular/common/http';
import { CovidService } from './../../services/covid.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  result: [];
  state: any;
  public $key;
  tempvar; //currently usused

  constructor(private covid: CovidService) { }

  ngOnInit() {
    this.covid.getStateWiseData().subscribe((data) => {
      this.result = data['statewise'];
      this.result.shift()
      // console.log(this.result);

    })
  }
  getSelectedStateData() {
    this.covid.getSelectedData(this.state).subscribe((data) => {
      this.$key = this.state;
    })
  }
  getSelectedState(state: any) {
    this.state = state;
  }
}
