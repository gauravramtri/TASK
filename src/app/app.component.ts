import { Component } from '@angular/core';

import {FilterPipe} from './pipes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  names:any;
  items: Array<any> = []
  

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
      



    ]
    this.title="Angular search";
      this.names=['Gaurav','Anukriti','Sunita','Dharmender','Divyanshu','Ishita','Sarthak','karan']
  }
  latitude = 28.4721;
  longitude = 77.0726;
}