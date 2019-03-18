import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';

@Component({
  selector: 'app-show-option2',
  templateUrl: './show-option2.component.html',
  styleUrls: ['./show-option2.component.css']
})
export class ShowOption2Component implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }
  options: any = [];
  current: string = "";
  father: string = "";
  systemId: number = 1;

  ngOnInit() {
    this.navService.currentSlug.subscribe(current => this.current = current);
    this.navService.currentFatherSlug.subscribe(current => this.father = current);
    this.navService.currentSystemId.subscribe(current => this.systemId = current);
    this.brandService.getOptions(this.father, this.systemId).subscribe((data: any) => {
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
      switch(slug){
        case 'engine-data-1':
        case 'engine-data-2':{
          this.route.navigate(['/scanner/show-parameters']);
        }
        break;
        default:{
          this.route.navigate(['/scanner/show-data']);
        }
      }
    }else 
        this.route.navigate(['/scanner/options']);
  }
}
