import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutodataScanner';

  constructor(update: SwUpdate){
    update.available.subscribe(evenet => {
      update.activateUpdate().then(() => document.location.reload());
    });
  }
}
