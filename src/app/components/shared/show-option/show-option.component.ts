import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/general/brand.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-show-option',
  templateUrl: './show-option.component.html',
  styleUrls: ['./show-option.component.css']
})

export class ShowOptionComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }
  options: any = [];
  current: string = "";
  father: string = "";
  systemId: number = 1;

  ngOnInit() {
    this.navService.currentSlug.subscribe(current => this.current = current);
    this.navService.currentFatherSlug.subscribe(current => this.father = current);
    this.navService.currentSystemId.subscribe(current => this.systemId = current);
    this.brandService.getOptions(this.father,this.systemId).subscribe(data => {
      this.options = data;      
      if(data.length === 0) this.route.navigate(['/scanner/system']);
    });
    
    this.navService.changeMenu('Select Data');
  }

  redirectToOption(id: number, slug: string, type: string){
    this.navService.changeFatherId(id);
    this.navService.cahangeFatherSlug(slug);
    this.navService.changeSlug(slug);
    this.navService.changeMenu('Select a Data');
    if (type === 'data') {
      this.route.navigate(['/scanner/show-data']);
    } else {
      this.route.navigate(['/scanner/options2']);
    }
  }

}
