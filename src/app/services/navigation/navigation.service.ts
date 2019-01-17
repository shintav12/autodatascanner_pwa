import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  private menu = new BehaviorSubject('Select a Make');
  private chosen_car = new BehaviorSubject(0);

  currentMenu = this.menu.asObservable();
  currentChosenCar = this.chosen_car.asObservable();
  
  constructor() { 
  }

  changeMenu(newMenu: string) {
    this.menu.next(newMenu)
  }

  changeCar(car: number) {
    this.chosen_car.next(car);
  }

}
