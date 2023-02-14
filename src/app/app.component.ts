import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ortLibrary';

  constructor(private darkmode:DarkModeService){}
  lightMode() {
    if (this.darkmode.isDarkMode) {
      return {
        backgroundColor: 'black',
        color: 'white'
        
        
        
      }
    } else {
      return {
        backgroundColor: 'white',
        color: 'black'
        
      }
    }
  }
}
