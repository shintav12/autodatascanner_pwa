 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }
  data = [];
  slug: string;
  show: boolean;
  father: string = '';
  message: string;
  ngOnInit() {
    this.navService.changeMenu('Codes Menu');
    this.show = false;
    this.navService.currentMenu.subscribe(message => this.message = message);
    this.navService.currentFatherSlug.subscribe(data => this.father = data);
    this.navService.currentSlug.subscribe(current => this.slug = current);
    this.navService.currentCase.subscribe((data: any) => {
      this.data = data.cases_codes;
    });
  }

  redirectToYear(brand_id: any) {
    this.navService.changeCar(brand_id);
    this.navService.changeMenu('Select a Year');
    this.route.navigate(['/scanner/years']);
  }

  goBack() {
    this.navService.changeFatherId(0);
    this.navService.cahangeFatherSlug('');
    this.route.navigate(['/scanner/system']);
  }

  showChoseComponent() {
    this.show = !this.show;
  }
}
