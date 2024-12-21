import { Routes } from '@angular/router';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'pages', component: PagesComponent},
    {path: 'settings', component: SettingsComponent},

];
