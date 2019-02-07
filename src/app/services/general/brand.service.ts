import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class BrandService {
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    return this.http.get(environment.api + 'brands').pipe(
      map(this.extractData));
  }

  getYears(brand_id:string): Observable<any> {
    return this.http.get(environment.api + 'cars/' + brand_id).pipe(
      map(this.extractData));
  }

  getModels(brand_id:string, year:string): Observable<any> {
    return this.http.get(environment.api + 'cars/' + brand_id + "/" + year).pipe(
      map(this.extractData));
  }


  getEngines(brand_id:string, year:string, model: string): Observable<any> {
    return this.http.get(environment.api + 'cars/' + brand_id + "/" + year + "/" + model).pipe(
      map(this.extractData));
  }

  getCar(brand_id:string, year:string, model: string, engine: string): Observable<any> {
    return this.http.get(environment.api + 'cars/' + brand_id + "/" + year + "/" + model + "/" + engine).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}