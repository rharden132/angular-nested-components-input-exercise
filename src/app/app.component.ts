import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-components-input-exercise';
  myPosts: String[] = ["post 1", "post 2", "post 3"];
}
