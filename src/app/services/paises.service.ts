import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel2 } from '../models/modelsProductos';
import { Observable } from 'rxjs';
import { filter } from 'minimatch';

const URL_PAISES = 'https://restcountries.eu/rest/v2/all';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  constructor(private http: HttpClient) { 

  }
  getAll(){
    return this.http.get(URL_PAISES);
  }  

  getPaises(){
    return new Observable(observer => {
      this.getAll().subscribe((data: any[]) => {
        observer.next(data);
      })
    })

  }
}
