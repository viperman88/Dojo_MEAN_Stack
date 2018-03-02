import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [{
    email: 'Frank@Amato.com',
    importance: true,
    subject: 'Headers',
    content: 'What should we add to our headers?'
  },
  {
    email: 'Robert@Amato.com',
    importance: true,
    subject: 'Dinner',
    content: 'What would you like for dinner?'
  },
  {
    email: 'Maggie@Amato.com',
    importance: false,
    subject: 'New Car',
    content: 'Just bought a new Tesla!!'
  },
  {
    email: 'Ashley@Amato.com',
    importance: false,
    subject: 'Drinks',
    content: 'Do you want to get some drinks?'
  },
  ];
}
