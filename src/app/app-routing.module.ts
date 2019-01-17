import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { CarsComponent } from './components/scanner/cars/cars.component';
import { YearsComponent } from './components/scanner/years/years.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'scanner', component: ScannerComponent},
  { path: 'scanner/cars', component: CarsComponent },
  { path: 'scanner/years', component: YearsComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
