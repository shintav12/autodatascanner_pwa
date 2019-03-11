import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private menu = new BehaviorSubject('Select a Make');
  private chosen_car = new BehaviorSubject(0);
  private year = new BehaviorSubject(0);
  private model = new BehaviorSubject('');
  private engine = new BehaviorSubject('');
  private slug = new BehaviorSubject('');
  private fatherSlug = new BehaviorSubject('');
  private fatherId = new BehaviorSubject(0);
  private systemId = new BehaviorSubject(1);
  private case = new BehaviorSubject(null);
  private selectedParameters = new BehaviorSubject(null);

  currentMenu = this.menu.asObservable();
  currentChosenCar = this.chosen_car.asObservable();
  currentYear = this.year.asObservable();
  currentModel = this.model.asObservable();
  currentEngine = this.engine.asObservable();
  currentSlug = this.slug.asObservable();
  currentFatherSlug = this.fatherSlug.asObservable();
  currentFatherId = this.fatherId.asObservable();
  currentSystemId = this.systemId.asObservable();
  currentCase = this.case.asObservable();
  currentSelectedParameters = this.selectedParameters.asObservable();

  constructor() { }

  changeMenu(newMenu: string) {
    this.menu.next(newMenu);
  }

  changeCar(car: number) {
    this.chosen_car.next(car);
  }

  changeYear(year: number) {
    this.year.next(year);
  }

  changeModel(model: string) {
    this.model.next(model);
  }

  changeEngine(engine: string) {
    this.engine.next(engine);
  }

  changeSlug(slug: string) {
    this.slug.next(slug);
  }

  cahangeFatherSlug(fatherSlug: string) {
    this.fatherSlug.next(fatherSlug);
  }

  changeFatherId(fatherId: number) {
    this.fatherId.next(fatherId);
  }

  changeSystemId(systemId: number) {
    this.systemId.next(systemId);
  }

  changeCase(_case: any) {
    this.case.next(_case);
  }

  changeSelectedParameters(_selectedParameters: any){
    this.selectedParameters = _selectedParameters;
  }

}
