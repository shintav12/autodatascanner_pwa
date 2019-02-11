import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  engine: any = 0;
  model: any = 0;
  brand_id: any = 0;
  year: any = 0;
  car: any;
  constructor( private route: Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.navService.currentChosenCar.subscribe(brand_id => this.brand_id = brand_id);
    this.navService.currentYear.subscribe(year => this.year = year);
    this.navService.currentModel.subscribe(model => this.model = model);
    this.navService.currentEngine.subscribe(engine => this.engine = engine);
    this.brandService.getCar(this.brand_id,this.year,this.model,this.engine).subscribe((data: {}) => {
      console.log(data);
      this.car = data;
    });
  }

  redirecToCase(){
    this.navService.changeMenu("Select System");
    this.route.navigate(['/scanner/system']);
  }

}
