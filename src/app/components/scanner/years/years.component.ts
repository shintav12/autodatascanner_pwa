import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  brand_id: any = 0;
  years: any = [];
  constructor(private route:Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.navService.changeMenu('Select Year');
    this.navService.currentChosenCar.subscribe(brand_id => this.brand_id = brand_id);
    this.brandService.getYears(this.brand_id).subscribe((data: {}) => {
      this.years = data;
    });

  }

  redirectToModelType(year: number){
    this.navService.changeYear(year);
    this.navService.changeMenu('Select Model Type');
    this.route.navigate(['/scanner/models']);
  }

}
