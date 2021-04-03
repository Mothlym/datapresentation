import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SolarPanelViewComponent } from './views/solar-panel-view/solar-panel-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { BatteryViewComponent } from './views/battery-view/battery-view.component';
import { WeatherViewComponent } from './views/weather-view/weather-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { SolarPanelGraphComponent } from './components/solar-panel-components/solar-panel-graph/solar-panel-graph.component';
import { MY_FORMATS } from './components/date-picker/format';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { SolarPanelDayGraphComponent } from './components/solar-panel-components/solar-panel-day-graph/solar-panel-day-graph.component';
import { PanelDataCardComponent } from './components/solar-panel-components/panel-data-card/panel-data-card.component';
import { BatteryIntervalComponent } from './components/battery-components/battery-interval/battery-interval.component';
import { BatterySummaryComponent } from './components/battery-components/battery-summary/battery-summary.component';
import { BatteryTableComponent } from './components/battery-components/battery-table/battery-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WeatherGraphComponent } from './components/weather-components/weather-graph/weather-graph.component';
import { WeatherLatestComponent } from './components/weather-components/weather-latest/weather-latest.component';
import { WeatherTableComponent } from './components/weather-components/weather-table/weather-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'solar',
    component: SolarPanelViewComponent
  },
  {
    path: 'weather',
    component: WeatherViewComponent
  },
  {
    path: 'battery',
    component: BatteryViewComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SolarPanelViewComponent,
    HomeViewComponent,
    BatteryViewComponent,
    WeatherViewComponent,
    PanelDataCardComponent,
    DatePickerComponent,
    SolarPanelGraphComponent,
    SolarPanelDayGraphComponent,
    BatteryIntervalComponent,
    BatterySummaryComponent,
    BatteryTableComponent,
    WeatherGraphComponent,
    WeatherLatestComponent,
    WeatherTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
