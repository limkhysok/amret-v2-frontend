import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileMenuOpen = false;
  currentLang = 'EN';
  isScrolled = false;

  readonly navLinks = [
    { label: 'HOME', route: '/home' },
    { label: 'ABOUT US', route: '/about' },
    { label: 'SERVICES', route: '/products' },
    { label: 'PROTECTION', route: '/protection' },
    { label: 'MEDIA', route: '/media' },
    { label: 'CAREERS', route: '/careers' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
  }

  @HostListener('document:click', ['$event'])
  closeMobileMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-navbar')) {
      this.isMobileMenuOpen = false;
    }
  }
}
