import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  constructor(private route:Router, private navService: NavigationService) { }

  ngOnInit() {
    this.navService.changeMenu('Select Year');
  }

  redirectToModelType(){
    this.navService.changeMenu('Select Model Type');
    this.route.navigate(['/scanner/models']);
  }

}
