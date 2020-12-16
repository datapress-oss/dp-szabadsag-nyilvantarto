import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  themes = ['Default', 'Pulse', 'Slate', 'Solar', 'Cyborg', 'Spacelab'];

  changeTheme(theme: string): void {
    const styleEl = document.querySelector('link[aria-label=theme]');
    styleEl.attributes[2].nodeValue = `./assets/themes/${theme.toLowerCase()}.min.css`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
