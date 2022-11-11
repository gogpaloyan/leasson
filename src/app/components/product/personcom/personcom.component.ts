import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsappService} from "../../../services/productsapp.service";

@Component({
  selector: 'app-personcom',
  templateUrl: './personcom.component.html',
  styleUrls: ['./personcom.component.css']
})


export class PersoncomComponent implements OnInit {

  user = {id: "", name: ""}
  product: any;



  constructor(private route: ActivatedRoute, private products: ProductsappService) {
  }

  gg(){
    this.product = this.product[+this.user.id - 1]
  }

  ngOnInit() {
   this.product = this.products.getProducts().subscribe((res) => {
     this.product = res
     this.gg()
   })

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }


  }




}
