import { CovidService } from './services/covid.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';
import { StateSingleComponent } from './components/state-single/state-single.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
// import { MapChartComponent } from './components/map-chart/map-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    TableComponent,
    SearchComponent,
    StateSingleComponent,
    ChartComponent,
    // MapChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    ChartsModule,
    // GoogleChart
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
