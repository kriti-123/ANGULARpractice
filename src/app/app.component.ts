import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  name='kriti shree gupta';
  data=10
  updatechild(){
    this.data = Math.floor(Math.random()*10);
  }
}
