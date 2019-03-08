import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  brands: any = [];
  case: any = [];

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getBrands().subscribe((data: {}) => {
      this.brands = data;
    });
    this.navService.changeMenu('Select Make');
    this.brandService.getCase().subscribe((data: {}) => {
      this.navService.changeCase(data);
    });
  }

  redirectToYear(brand_id: any) {
    this.navService.changeCar(brand_id);
    this.navService.changeMenu('Select a Year');
    this.route.navigate(['/scanner/years']);
  }
}
