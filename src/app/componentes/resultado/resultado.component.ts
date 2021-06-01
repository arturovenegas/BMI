import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  resultados: string;
  interpretaciones: string;

  constructor(private route: ActivatedRoute) {
    this.resultados = "---";
    this.interpretaciones = "---";
    this.bmi = +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado;
  }

  getResultado(){

    if(this.bmi >=25){
      this.resultados = 'Exceso de peso';
      this.interpretaciones = 'Tienes un peso corporal superior al normal, Intente hacer ejercicio'
    }else if(this.bmi >=19 ){
      this.resultados = 'Peso Normal';
      this.interpretaciones = 'Tienes un peso corporal normal !Buen Trabajo¡'
    }else{
      this.resultados = 'Peso Bajo';
      this.interpretaciones = 'Tienes un peso muy bajo !Puedes comer un poco mas¡'
    }

  }
}
