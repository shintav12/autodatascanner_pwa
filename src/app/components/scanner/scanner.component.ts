import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate(['/scanner/cars']);
  }

}
