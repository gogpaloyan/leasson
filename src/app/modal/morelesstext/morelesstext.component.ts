import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-morelesstext',
  templateUrl: './morelesstext.component.html',
  styleUrls: ['./morelesstext.component.css']
})
export class MorelesstextComponent implements OnInit {
  @Input() text: string = ""
  @Input() max:number = 10
  show:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
