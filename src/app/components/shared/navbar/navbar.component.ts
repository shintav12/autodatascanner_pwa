import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  father:string = "";
  message: string;
  constructor(private navservice: NavigationService, private route: Router) { }

  ngOnInit() {
    this.navservice.currentMenu.subscribe(message => this.message = message)
    this.navservice.currentFatherSlug.subscribe(data => this.father = data);
  }
  
  goBack(){
    this.route.navigate(["/scanner/system"]);
  }
}
