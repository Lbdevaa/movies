import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isOpenHamburger = false

  toggleHamburger() {
    this.isOpenHamburger = !this.isOpenHamburger
  }
  title = 'movies';
}
