import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { BrandService } from 'src/app/services/general/brand.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService, public brandService: BrandService, private modalService: NgbModal) { }
  systems: any = [];

  ngOnInit() {
    this.navService.currentSystem.subscribe(data => {this.systems = data;});
    this.navService.changeMenu('Select System');
  }

  redirectToYear(brand_id: any) {
    this.navService.changeCar(brand_id);
    this.navService.changeMenu('Select a Year');
    this.route.navigate(['/scanner/years']);
  }

  redirectToHome(){
    this.modalService.dismissAll();
    this.route.navigate(['/home']);
  }

  triggerModal(content){
    this.modalService.open(content, { size: 'sm' });
  }

  goBack() {
    this.navService.changeFatherId(0);
    this.navService.cahangeFatherSlug('');
    this.route.navigate(['/scanner/system']);
  }
  

  redirectToOption(system: any) {
    this.navService.changeSystemId(system);
    this.navService.changeMenu('Select a Data');
    this.route.navigate(['/scanner/options']);
  }

}
