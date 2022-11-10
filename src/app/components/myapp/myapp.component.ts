import { Component, OnInit } from '@angular/core';
import {AppstorService, item} from "../../services/appstor.service";


@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})



export class MyappComponent implements OnInit {
  items: Array<item> = []
  text: string = ""
  error:string = ""

  onAdd(text:string){
    if(text.length === 0){
      return this.error = "requared input not be empty"
    }else{
      this.text = ""
      this.error = ""
      return this.appstorservise.onAdd(text)
    }


  }
  onDelete(id: number){
    return this.appstorservise.onDelete(id)
  }
  cleare(){
    return this.appstorservise.claere()
  }
  getCount(){
    return this.appstorservise.getCount()
  }
  constructor(private appstorservise: AppstorService) { }

  ngOnInit(){

  }
  ngDoCheck(){
    return this.items = this.appstorservise.getTodo()
  }

}
