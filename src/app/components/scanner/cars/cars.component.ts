import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService) { }

  ngOnInit() {
    this.navService.changeMenu('Select Make');
  }

  redirectToYear(){
    this.navService.changeMenu("Select a Year");
    this.route.navigate(['/scanner/years'])
  }
}
