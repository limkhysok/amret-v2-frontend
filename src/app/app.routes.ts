import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Clients } from './pages/clients/clients';
import { Loans } from './pages/loans/loans';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'dashboard', component: Dashboard },
    { path: 'clients', component: Clients },
    { path: 'loans', component: Loans },
    { path: 'reports', component: Reports },
    { path: 'settings', component: Settings },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
