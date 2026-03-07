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

  readonly navLinks = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'About Us', icon: 'info', route: '/about' },
    { label: 'Products & Services', icon: 'inventory_2', route: '/products' },
    { label: 'Protection', icon: 'security', route: '/protection' },
    { label: 'Media', icon: 'perm_media', route: '/media' },
    { label: 'Careers', icon: 'work', route: '/careers' },
  ];

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
