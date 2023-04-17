import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dark-toggle',
  templateUrl: './dark-toggle.component.html',
  styleUrls: ['./dark-toggle.component.css'],
})
export class DarkToggleComponent {
  // selector: 'app-dark-mode-toggle',
  isChecked = false;

  constructor(public themeService: ThemeService) {}

  toggleDarkMode() {
    this.themeService.isDarkThemeEnabled =
      !this.themeService.isDarkThemeEnabled;
    this.isChecked = this.themeService.isDarkThemeEnabled;
  }
}

