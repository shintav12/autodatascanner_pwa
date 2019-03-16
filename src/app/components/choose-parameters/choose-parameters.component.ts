import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-choose-parameters',
  templateUrl: './choose-parameters.component.html',
  styleUrls: ['./choose-parameters.component.css']
})
export class ChooseParametersComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }
  data = [];
  slug: string;

  ngOnInit() {
    this.navService.changeMenu('Codes Menu');
    this.navService.currentSlug.subscribe(current => this.slug = current);
    this.navService.currentParameters.subscribe(current => this.data = current);
  }

}
