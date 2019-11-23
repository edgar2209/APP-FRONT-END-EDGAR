import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel2 } from 'src/app/models/modelsProductos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  productos: ProductModel2[]=[];
  criterio: string ="";
  constructor(private router: ActivatedRoute, private servicio: ProductsService) { 
    this.router.params.subscribe(params => {
      this.criterio = params['criterio'];
      //console.log('El criterio de busqueda es: ', criterio);
      this.servicio.getSearch(this.criterio).subscribe((data: ProductModel2[]) => {
        this.productos=data;
      })
    })
  }

  ngOnInit() {
  }

}
