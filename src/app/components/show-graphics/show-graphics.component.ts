import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-show-graphics',
  templateUrl: './show-graphics.component.html',
  styleUrls: ['./show-graphics.component.css']
})
export class ShowGraphicsComponent implements OnInit {

  data = [];
  aux = [];
  slug: string;
  show: boolean;
  father: string = '';
  message: string;
  showOptions: boolean;
  number: number;

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.navService.changeMenu('Parameters');
    this.show = false;
    this.showOptions = false;
    this.navService.currentMenu.subscribe(message => this.message = message);
    this.navService.currentFatherSlug.subscribe(data => this.father = data);
    this.navService.currentSlug.subscribe(current => this.slug = current);
    this.navService.currentSelectedParameters.subscribe(data => this.data = data);
    this.navService.currentGraphNumber.subscribe(data => this.number = data);
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
}
