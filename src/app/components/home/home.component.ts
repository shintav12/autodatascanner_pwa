import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getCase().subscribe((data) => {
      this.navService.changeCase(data);
      if(data.canbus_case == 1) 
      {
        this.navService.changeMenu('Diagram');
        this.route.navigate(['/scanner/diagram']);
      }

    });
  }

}
