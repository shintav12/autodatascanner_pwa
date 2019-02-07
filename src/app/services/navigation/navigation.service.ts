import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  private menu = new BehaviorSubject('Select a Make');
  private chosen_car = new BehaviorSubject(0);
  private year = new BehaviorSubject(0);
  private model = new BehaviorSubject("");
  private engine = new BehaviorSubject("");

  currentMenu = this.menu.asObservable();
  currentChosenCar = this.chosen_car.asObservable();
  currentYear = this.year.asObservable();
  currentModel= this.model.asObservable();
  currentEngine= this.engine.asObservable();
  
  constructor() { 
  }

  changeMenu(newMenu: string) {
    this.menu.next(newMenu)
  }

  changeCar(car: number) {
    this.chosen_car.next(car);
  }

  changeYear(year: number){
    this.year.next(year);
  }

  changeModel(model: string){
    this.model.next(model);
  }

  changeEngine(engine: string){
    this.engine.next(engine);
  }

}
