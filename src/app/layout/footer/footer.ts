import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly columns = [
    {
      heading: 'Loans',
      links: ['Micro Loans', 'SME Loans', 'Agricultural Loans', 'Solidarity Group Loans', 'Personal Loans'],
    },
    {
      heading: 'Savings',
      links: ['Current Accounts', 'Savings Accounts', 'Fixed Deposits', 'Kids Savings', 'Retirement Savings'],
    },
    {
      heading: 'Transaction',
      links: ['Local Fund Transfer', 'International Transfer', 'Bill Payment', 'Payroll Service', 'Bakong Transfer'],
    },
    {
      heading: 'Resources',
      links: ['News & Updates', 'Interest Rates', 'Exchange Rates', 'Download Forms', 'Annual Reports'],
    },
    {
      heading: 'Support',
      links: ['Find a Branch', 'Find an ATM', 'FAQ', 'Feedback & Complaints', 'Security Tips'],
    },
    {
      heading: 'Parent Company',
      links: ['Advans Group', 'FMO', 'IFC'],
    },
  ];

  readonly socialLinks = [
    { icon: 'fa-facebook-f', title: 'Facebook', href: '#' },
    { icon: 'fa-instagram', title: 'Instagram', href: '#' },
    { icon: 'fa-telegram-plane', title: 'Telegram', href: '#' },
    { icon: 'fa-youtube', title: 'YouTube', href: '#' },
    { icon: 'fa-tiktok', title: 'TikTok', href: '#' },
  ];
}
