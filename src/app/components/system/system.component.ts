import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }
  systems : any = [];

  ngOnInit() {
    this.brandService.getSystems().subscribe((data: {}) => {
      console.log(data);
      this.systems = data;
    });
    this.navService.changeMenu('Select System');
  }

  redirectToOption(system:any){
    this.navService.changeSystemId(system)
    this.navService.changeMenu("Select a Data");
    this.route.navigate(['/scanner/options'])
  }

}
