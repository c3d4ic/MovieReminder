import { Component } from '@angular/core';
import { HeaderService } from './commons/services/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private headerService: HeaderService) {}

}
