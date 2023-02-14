import 'zone.js/dist/zone';
import {Component, isStandalone} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class addOneButtonComponent{
  count = 0;
}

bootstrapApplication(addOneButtonComponent);