import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  models: any = [];
  brand_id: any = 0;
  year: any = 0;

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }
  
  ngOnInit() {
    this.navService.currentChosenCar.subscribe(brand_id => this.brand_id = brand_id);
    this.navService.currentYear.subscribe(year => this.year = year);
    this.brandService.getModels(this.brand_id,this.year).subscribe((data: {}) => {
      this.models = data;
    });
    this.navService.changeMenu('Select Model Type');
  }

  redirectToEngineType(model: string){
    this.navService.changeModel(model);
    this.navService.changeMenu("Select Engine Type");
    this.route.navigate(['/scanner/engines']);
  }
}
