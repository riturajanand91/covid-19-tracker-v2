import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(
    private http: HttpClient
  ) { }

  getTableData() {
    return this.http.get('https://api.covid19india.org/data.json');
  }

  getStateWiseData(): Observable<any> {
    const stateWiseUrl = 'https://api.covid19india.org/data.json';
    // console.log("getStateWiseData:: "+stateWiseUrl);
    return this.http.get<any>(stateWiseUrl)
  }

  getSelectedData(state): Observable<any> {
    const url = 'http://covid19-india-adhikansh.herokuapp.com/state/' + state;
    // console.log("getSelectedData(state):: "+url);
    return this.http.get<any>(url)
  }

  getDistrictWiseData() {
    const disturl = 'https://api.covid19india.org/v2/state_district_wise.json';
    // console.log("getSelectedData(state):: "+disturl);
    return this.http.get<any>(disturl)
  }
}
