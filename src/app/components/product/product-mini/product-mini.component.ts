import {Component, Input, OnInit} from '@angular/core';
import {ProductsappService} from "../../../services/productsapp.service";

@Component({
  selector: 'app-product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.css']
})
export class ProductMiniComponent implements OnInit {

  @Input() product: any = []
  show: boolean = false
  max:number = 20
  onCount(text:string | number){
    alert(text)
  }

  constructor() { }

  ngOnInit() {

  }

}
