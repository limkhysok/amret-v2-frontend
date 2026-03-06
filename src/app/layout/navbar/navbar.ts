import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileMenuOpen = false;
  isLangDropdownOpen = false;
  currentLang = 'ENGLISH';

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleLangDropdown(event: Event) {
    event.stopPropagation();
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.isLangDropdownOpen = false;
  }

  // Close dropdown when clicking outside
  constructor() {
    window.addEventListener('click', () => {
      this.isLangDropdownOpen = false;
    });
  }
}
