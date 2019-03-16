import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/general/brand.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-show-parameters',
  templateUrl: './show-parameters.component.html',
  styleUrls: ['./show-parameters.component.css']
})
export class ShowParametersComponent implements OnInit {

  data = [];
  aux = [];
  originalArray = [];
  slug: string;
  show: boolean;
  father: string = '';
  message: string;
  showOptions: boolean;

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService) { }

  ngOnInit() {
    this.navService.changeMenu('Parameters');
    this.show = false;
    this.showOptions = false;
    this.navService.currentMenu.subscribe(message => this.message = message);
    this.navService.currentFatherSlug.subscribe(data => this.father = data);
    this.navService.currentSlug.subscribe(current => this.slug = current);
    this.navService.currentParameters.subscribe((data: any) => {
      this.data = this.originalArray = data;
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
    this.showOptions = !this.showOptions;
    this.show = !this.show;
  }

  showOption() {
    this.showOptions = !this.showOptions;
  }

  selectParam(item: any, index: Number){
    var search = this.aux.findIndex( item => item.index === index);
    if(search != -1){
      this.aux.splice(search,1);
    }else{
      this.aux.push({ item: item, index: index});
    }
  }

  saveSelectedParams(){
    this.data = [];
    for(let i = 0; i < this.aux.length; i++){
      this.data.push(this.aux[i].item);
    }

    if(this.aux.length === 0){
      this.data = this.originalArray;
    }
    this.show = !this.show;
    this.navService.changeSelectedParameters(this.data);
  }
}
