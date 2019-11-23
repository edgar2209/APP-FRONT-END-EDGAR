import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel2 } from '../models/modelsProductos';
import { Observable } from 'rxjs';
import { filter } from 'minimatch';

const URL_PRODUCTS = 'https://appangularedgar.firebaseio.com/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getAll(){
    return this.http.get(URL_PRODUCTS);
  }
    
  getCategory(category: string){
    return new Observable(observer => {
      this.getAll().subscribe((data: ProductModel2[]) => {
        //ECMASCRIPT 6 si es un return de una linea no se pone la palabra return se regresa asi.
        const filter = data.filter(item => item.categoria == category || item.categoria.indexOf(category) >= 0);
        //Con el metodo next el observable regresa el filter al component.
        observer.next(filter);
      });
    })
    
  }

  getByCode(code: string){
    return new Observable(observer => {
      this.getAll().subscribe((data: ProductModel2[]) => {
        const filter2 = data.filter(item => item.codigo == code);
        observer.next(filter2[0]);
      })
    })

  }
  getSearch(searchDescription: string){
    return new Observable(observer => {
      this.getAll().subscribe((data: ProductModel2[]) => {
        //ECMASCRIPT 6 si es un return de una linea no se pone la palabra return se regresa asi.
        const filter = data.filter(item => item.descripcion.toLowerCase() == searchDescription.toLowerCase() || item.descripcion.toLowerCase().indexOf(searchDescription.toLowerCase()) >= 0);
        //Con el metodo next el observable regresa el filter al component.
        observer.next(filter);
      });
    })
    
  }
  
}
