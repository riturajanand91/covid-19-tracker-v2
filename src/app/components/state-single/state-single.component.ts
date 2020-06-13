import { CovidService } from 'src/app/services/covid.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-state-single',
  templateUrl: './state-single.component.html',
  styleUrls: ['./state-single.component.scss']
})
export class StateSingleComponent implements OnInit {
  // Global Vars/
  id; result; table; cardData;

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
    });
  }
}
