import { Component, OnInit } from '@angular/core';
import {ProductsappService} from "../../services/productsapp.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = []
  search: string = ""



  constructor(private productserviceapp: ProductsappService) { }

  ngOnInit() {

    return this.products = this.productserviceapp.getProducts().subscribe((res)=>{
      return this.products = res
    })
  }

}
