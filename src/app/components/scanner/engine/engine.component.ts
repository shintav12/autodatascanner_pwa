import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {
  engines: any = [];
  model: any = 0;
  brand_id: any = 0;
  year: any = 0;
  constructor( private route: Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.navService.currentChosenCar.subscribe(brand_id => this.brand_id = brand_id);
    this.navService.currentYear.subscribe(year => this.year = year);
    this.navService.currentModel.subscribe(model => this.model = model);
    this.brandService.getEngines(this.brand_id,this.year,this.model).subscribe((data: {}) => {
      console.log(data);
      this.engines = data;
    });
    this.navService.changeMenu('Select Engine Type');
  }

  redirectToConfirmation(engine:string){
    this.navService.changeEngine(engine);
    this.navService.changeMenu("Confirm");
    this.route.navigate(['/scanner/confirmation']);
  }
}
