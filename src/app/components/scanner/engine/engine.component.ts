import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  constructor( private route: Router, private navService: NavigationService) { }

  ngOnInit() {
    this.navService.changeMenu('Select Engine Type');
  }

  redirectToConfirmation(){
    this.navService.changeMenu("confirm");
    this.route.navigate(['/scanner/confirmation']);
  }
}
