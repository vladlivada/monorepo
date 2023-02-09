import { Component } from '@angular/core';
import { POST } from '@my-app/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  public test: POST = {
    test: 'ceva'
  }


  constructor() {
    console.log(this.test);
  }
}
