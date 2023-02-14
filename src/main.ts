import 'zone.js/dist/zone';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-contador',
  standalone: true,
  template:  `
  <div class="div-principal">
    <div class="contador">
      <h1>Contador</h1> <br>
        <div class="botones-ad"> 
          <button class="button" (click)="count = count + 1">Aumentar uno</button>
          <button class="button" (click)="count = count - 1">Disminuir uno</button>
        </div>
        <div class="count">{{ count }}</div>
      <button class="button" (click)="count = 0">Reset</button>
    </div>
  </div>
  `,
 styleUrls: ['./styles.css']
})

export class AddOneButtonComponent {
  count = 0;
}

bootstrapApplication(AddOneButtonComponent);