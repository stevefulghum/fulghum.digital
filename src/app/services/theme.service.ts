import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'theme-preference';
  
  // Signal to track current theme
  readonly isDarkMode = signal<boolean>(this.getInitialTheme());

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = !this.isDarkMode();
    
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        this.isDarkMode.set(newTheme);
      });
    }

    localStorage.setItem(this.storageKey, newTheme ? 'dark' : 'light');
  }
  
  /**
   * Get the initial theme preference
   * Priority: localStorage > system preference > default to light
   */
  private getInitialTheme(): boolean {
    if (typeof window === 'undefined') {
      return false; // SSR fallback
    }
    
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      return stored === 'dark';
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
