import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit {

  misdatos2: any[] = [];

  constructor(private paisesService: PaisesService) {  
    this.paisesService.getPaises().subscribe((data:any []) => {
      this.misdatos2 = data;
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
