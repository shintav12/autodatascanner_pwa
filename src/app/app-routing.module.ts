import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { CarsComponent } from './components/scanner/cars/cars.component';
import { YearsComponent } from './components/scanner/years/years.component';
import { ModelComponent } from './components/scanner/model/model.component';
import { EngineComponent } from './components/scanner/engine/engine.component';
import { ConfirmationComponent } from './components/scanner/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'scanner', component: ScannerComponent},
  { path: 'scanner/cars', component: CarsComponent },
  { path: 'scanner/years', component: YearsComponent },
  { path: 'scanner/models', component: ModelComponent},
  { path: 'scanner/engines', component: EngineComponent},
  { path: 'scanner/confirmation', component: ConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
