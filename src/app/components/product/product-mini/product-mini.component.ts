import {Component, Input, OnInit} from '@angular/core';
import {ProductsappService} from "../../../services/productsapp.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.css']
})


export class ProductMiniComponent implements OnInit {

  @Input() product: any = []
  show: boolean = false
  max:number = 20



  getRoute(text:string | number, id:string){
  return this.router.navigate(["home/gg", id, text])
  }

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
