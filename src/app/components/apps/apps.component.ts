import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']

})
export class AppsComponent implements OnInit {
  customOptions: any;
  images = [
    {imageSrc: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
      imageAlt: '1'
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg',
      imageAlt: '2'
    },
    {
      imageSrc: 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=',
      imageAlt: '3'
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
      imageAlt: '4'
    },    {
      imageSrc: 'https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg',
      imageAlt: '5'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
