import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { ReadFileService } from 'src/app/servizi/read-file.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css'],
})



export class GrigliaComponent implements OnInit{
  // nodi = [{nome: 'AGDL', descrizione: 'descrizione', status: true, master: 'AG1' },
  //         {nome: 'FDP', descrizione: 'descrizione', status: true, master: 'FP2' },
  //         {nome: 'MRT', descrizione: 'descrizione', status: true, master: 'RD2' },
  //         {nome: 'VIF', descrizione: 'descrizione', status: true, master: 'VG1' },
  //         {nome: 'MNA', descrizione: 'descrizione', status: true, master: 'MN2' },
  //         {nome: 'LNR', descrizione: 'descrizione', status: true, master: 'LN2' },
  //         {nome: 'RPL', descrizione: 'descrizione', status: false, master: 'RP1' },
  //         {nome: 'DBH', descrizione: 'descrizione', status: true, master: 'DB2' },
  //         {nome: 'RFE', descrizione: 'descrizione', status: true, master: 'RF1' },
  //         {nome: 'SNET', descrizione: 'descrizione', status: true, master: 'SN2' },
  //         {nome: 'RPM', descrizione: 'descrizione', status: false, master: 'RM1' },
  //         {nome: 'MTCD', descrizione: 'descrizione', status: true, master: 'MT1' },
  //         {nome: 'AGDL', descrizione: 'descrizione', status: true, master: 'AG1' },
  //         {nome: 'FDP', descrizione: 'descrizione', status: true, master: 'FP2' },
  //         {nome: 'MRT', descrizione: 'descrizione', status: true, master: 'RD2' },
  //         {nome: 'VIF', descrizione: 'descrizione', status: true, master: 'VG1' },
  //       ]

    nodi: any

  constructor(public dialog: MatDialog, private servizioJson: ReadFileService) {}

  ngOnInit(): void {
    this.nodi = this.servizioJson.getJsonData()
    
  }
  prova(nodo: any){
    console.log(nodo.master)
  }

  getNodo(nome: string){
    return this.nodi.filter((x: { nome: string; }) => x.nome == nome)[0];
    // console.log(this.nodi.filter(x => x.nome == nome)[0])
  }

  openDialog(nome: string) {
    const nodo = this.getNodo(nome)
    console.log(nodo)
    this.dialog.open(DialogoComponent, {
      data: {nome: nodo.componente,
              status: nodo.status_component,
              master: nodo.nodi[0].master,
              ip: nodo.nodi[0].ip}
    });
  }

}

