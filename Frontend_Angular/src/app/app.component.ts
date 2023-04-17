import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frontend_Angular';

  // constructor(public themeService: ThemeService) {}

   constructor(public themeService: ThemeService) {
    // initialize the theme service here
    this.themeService.initTheme();
   }
  // toggleDarkMode() {
  //   this.themeService.isDarkThemeEnabled =
  //     !this.themeService.isDarkThemeEnabled;
  // }

  // ngOnInit() {
  //   const darkThemeClass = 'dark-theme';
  //   const body = document.querySelector('body');
  //   if (body) {
  //     this.themeService.isDarkThemeEnabled =
  //       !this.themeService.isDarkThemeEnabled;
  //     body.classList.toggle(
  //       darkThemeClass,
  //       this.themeService.isDarkThemeEnabled
  //     );
  //   }
  // }
}
