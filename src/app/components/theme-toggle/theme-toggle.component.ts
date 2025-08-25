import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  host: {
    class: 'theme-toggle',
    '[attr.aria-label]': 'themeService.isDarkMode() ? "Switch to light mode" : "Switch to dark mode"',
    '[title]': 'themeService.isDarkMode() ? "Switch to light mode" : "Switch to dark mode"',
    '(click)': 'themeService.toggleTheme()',
    type: 'button'
  },
  selector: 'button[theme-toggle]',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);
}
