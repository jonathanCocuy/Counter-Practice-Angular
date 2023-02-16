import 'zone.js/dist/zone';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-contador',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {
    title = 'ProyectoAngular';

    count = 0;

  SumarContador (){
    this.count = this.count + 1
  }

  RestarContador (){
    this.count = this.count - 1
  }

  ResetearContador (){
    this.count = 0
  }
}
