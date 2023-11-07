import { Component, ComponentFactoryResolver } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'AngularAssignment';
}
