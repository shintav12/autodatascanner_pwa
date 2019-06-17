import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation/navigation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {


  constructor(private navservice: NavigationService) { }

  case : any;
  url: string;


  ngOnInit() {
    this.navservice.currentCase.subscribe(data => this.case = data);
    this.url = environment.images;
  }

}
