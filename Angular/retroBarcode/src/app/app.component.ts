import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode Generator';

  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'olive', 'slategrey', 'brown', 'darksalmon', 'darkcyan',
            'greenyellow', 'dodgerblue', 'plum', 'sienna', 'rosybrown', 'peachpuff', 'navy', 'orangered'];

  colorArr = [];
    randomColors(colorArr) {
      for (let i = 0; i < this.colors.length; i++) {
        const randNum = (Math.floor(Math.random() * this.colors.length));
        console.log(this.colors[randNum]);
        this.colorArr.push(this.colors[randNum]);
      }
    }
    // ngOnInit is called right after the directive's data-bound properties have been checked for the first time,
    // and before any of its children have been checked. It is invoked only once when the directive is instantiated.
    ngOnInit() {
      this.randomColors(this.colors);
    }
}
