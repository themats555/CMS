import { Injectable } from '@angular/core';
import data from 'src/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  data_from_json = data;
  
  constructor() { 
  }


  getJsonData(){
    return this.data_from_json;
  }

  getNode(id: number){
    return this.data_from_json.filter(obj => {
      // console.log(obj.id)
      // console.log(id)
      // console.log(obj.id == id)
      return obj.id == id;
    })

  }
}
