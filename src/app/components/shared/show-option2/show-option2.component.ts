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
  options :any = [];
  current :string = "";
  father :string = "";
  systemId: number = 1;

  ngOnInit() {
    this.navService.currentSlug.subscribe(current => this.current = current);
    this.navService.currentFatherSlug.subscribe(current => this.father = current);
    this.navService.currentSystemId.subscribe(current => this.systemId = current);
    this.brandService.getOptions(this.father,this.systemId).subscribe((data: {}) => {
      console.log(data);
      this.options = data;
    });
    this.navService.changeMenu('Select Data');
  }

  redirectToOption(id:number, slug:string){
    this.navService.changeFatherId(id);
    this.navService.cahangeFatherSlug(slug);
    this.navService.changeMenu("Select a Data");
    this.route.navigate(['/scanner/options'])
  }

}
