import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message: string;
  constructor(private navservice: NavigationService) { }

  ngOnInit() {
    this.navservice.currentMenu.subscribe(message => this.message = message)
  }

}
