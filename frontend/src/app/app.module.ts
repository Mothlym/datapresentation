import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SolarPanelViewComponent } from './views/solar-panel-view/solar-panel-view.component';

const routes: Routes = [
  {
    path: '',
    component: SolarPanelViewComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SolarPanelViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
