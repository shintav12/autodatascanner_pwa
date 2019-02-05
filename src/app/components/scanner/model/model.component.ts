import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(private route: Router, private navService: NavigationService) { }

  ngOnInit() {
    this.navService.changeMenu('Select Model Type');
  }

  redirectToEngineType(){
    this.navService.changeMenu("Select Engine Type");
    this.route.navigate(['/scanner/engines']);
  }
}
