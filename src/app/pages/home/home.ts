import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly products = [
    { icon: 'payments', title: 'Loans', desc: 'Fast and tailored loan to your needs' },
    { icon: 'savings', title: 'Savings', desc: 'Safe and high returns accounts to realize your dream' },
    { icon: 'sync_alt', title: 'Transactions', desc: 'Pay and transfer at your convenience' },
    { icon: 'verified_user', title: 'Insurance', desc: 'Life and credit insurance to secure your future' },
  ];

  readonly figures = [
    { value: '$ 1,965 M', label: 'Current Assets' },
    { value: '$ 1,459 M', label: 'Deposit Portfolio' },
    { value: '$ 1,642 M', label: 'Loan Portfolio' },
    { value: '856,402', label: 'Clients' },
  ];

  readonly news = [
    {
      img: 'https://images.unsplash.com/photo-1531050171651-73892621151d?q=80&w=800&auto=format&fit=crop',
      date: 'March 05, 2026',
      title: 'Amret Awarded "Best MFI in Cambodia" for 2025',
      excerpt: 'We are proud to announce that Amret has received international recognition for its inclusive financial services...',
    },
    {
      img: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop',
      date: 'February 28, 2026',
      title: 'New Branch Opening in Mondulkiri Province',
      excerpt: 'Expanding our reach to serve the community better. Visit our new branch for all your financial needs...',
    },
    {
      img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop',
      date: 'February 15, 2026',
      title: 'Financial Literacy Program Reaches 10,000 Students',
      excerpt: 'Empowering the next generation with essential money management skills across nationwide schools...',
    },
  ];

  readonly carouselImages = [
    { src: 'https://images.unsplash.com/photo-1589330694653-7681cad4482c?q=80&w=800&auto=format&fit=crop', alt: 'Certification' },
    { src: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=800&auto=format&fit=crop', alt: 'Award Prize' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', alt: 'Modern Office' },
    { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop', alt: 'Sustainable Environment' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', alt: 'Top Ranking HQ' },
    { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop', alt: 'Achievement' },
    { src: 'https://images.unsplash.com/photo-1569012871812-f38ee6fc0528?q=80&w=800&auto=format&fit=crop', alt: 'Certificate' },
    { src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop', alt: 'Professional Workspace' },
    { src: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop', alt: 'Sleek Building' },
    { src: 'https://images.unsplash.com/photo-1621245190994-010419356076?q=80&w=800&auto=format&fit=crop', alt: 'Official Certificate' },
  ];
}
