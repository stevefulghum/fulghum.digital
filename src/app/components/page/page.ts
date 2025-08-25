import { Component, effect, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.html',
  styleUrls: ['./page.css'],
  encapsulation: ViewEncapsulation.None
})
export class Page {
}
