import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SolarPanelViewComponent } from './views/solar-panel-view/solar-panel-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { BatteryViewComponent } from './views/battery-view/battery-view.component';
import { WeatherViewComponent } from './views/weather-view/weather-view.component';
import { PanelDataCardComponent } from './components/panel-data-card/panel-data-card.component';

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
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
