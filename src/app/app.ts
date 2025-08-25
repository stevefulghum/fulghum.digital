import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ThemeService } from './services/theme.service';

@Component({
  host: {
    '[class]': 'themeService.isDarkMode() ? "dark" : "light"'
  },
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fulghum.digital');
  themeService: ThemeService


  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }
}
