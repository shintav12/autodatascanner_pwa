import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/scanner/cars/cars.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { YearsComponent } from './components/scanner/years/years.component';
import { ModelComponent } from './components/scanner/model/model.component';
import { EngineComponent } from './components/scanner/engine/engine.component';
import { ConfirmationComponent } from './components/scanner/confirmation/confirmation.component';
import { SystemComponent } from './components/system/system.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowOptionComponent } from './components/shared/show-option/show-option.component';
import { ShowOption2Component } from './components/shared/show-option2/show-option2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarsComponent,
    ScannerComponent,
    YearsComponent,
    ModelComponent,
    EngineComponent,
    ConfirmationComponent,
    SystemComponent,
    ShowOptionComponent,
    ShowOption2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
