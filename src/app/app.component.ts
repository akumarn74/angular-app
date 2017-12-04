import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>It's working {{name}}</h1>`,
})
export class AppComponent  { name = 'fine!'; }
