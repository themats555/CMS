import { Injectable } from '@angular/core';
import data from 'src/assets/data.json';
import data_new from 'src/assets/data_new.json';

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  data_from_json = data;
  data_new = data_new;
  
  constructor() { 
  }

  getJsonData(){
    for(let i = 0; i < this.data_new.length; i++) {
      if (this.data_new[i].nodi[0].status || this.data_new[i].nodi[1].status){
        this.data_new[i].status_component = true
      }else{
        this.data_new[i].status_component = false
      }
    }
    return this.data_new ;
  
}

  getNode(id: number){
    return this.data_new.filter(obj => {
      // console.log(obj.id)
      // console.log(id)
      // console.log(obj.id == id)
      return obj.id == id;
    })

  }
}
