import { Component, Input } from '@angular/core';
import { ReadFileService } from '../servizi/read-file.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.component.html',
  styleUrls: ['./nodo.component.css']
})
export class NodoComponent {
  id_nodo: any;
  nodo: any;

  constructor(private servizioJson: ReadFileService, private route: ActivatedRoute) {}
  
  ngOnInit(): void{
    // faccio la subscribe in modo che ricarichi le variabili ogni volta che cambia la url
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id_nodo = params.get('id') 
      this.nodo = this.servizioJson.getNode(this.id_nodo)
      console.log(this.nodo[0].componente)

    })
  }
}


