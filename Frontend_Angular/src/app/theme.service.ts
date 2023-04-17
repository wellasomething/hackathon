import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDarkThemeEnabled: boolean = false;

  constructor() {
    this.initTheme();
  }

  toggleTheme() {
    this.isDarkThemeEnabled = !this.isDarkThemeEnabled;
    this.setTheme(this.isDarkThemeEnabled);
  }

  setTheme(isDarkThemeEnabled: boolean) {
    const hostClass = isDarkThemeEnabled ? 'dark-theme' : 'light-theme';
    document.body.classList.remove(
      this.isDarkThemeEnabled ? 'light-theme' : 'dark-theme'
    );
    document.body.classList.add(hostClass);
    this.isDarkThemeEnabled = isDarkThemeEnabled;
    localStorage.setItem('isDarkThemeEnabled', String(isDarkThemeEnabled));
  }

  public initTheme() {
    const isDarkThemeEnabled = localStorage.getItem('isDarkThemeEnabled');
    if (isDarkThemeEnabled === null) {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.setTheme(prefersDarkMode);
    } else {
      this.setTheme(isDarkThemeEnabled === 'true');
    }
  }

  getisDarkThemeEnabled(): boolean {
    return this.isDarkThemeEnabled;
  }
}

