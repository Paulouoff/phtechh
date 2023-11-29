import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
    { path: 'newsletter', loadChildren: () => import('./modules/newsletter/newsletter.module').then(m => m.NewsletterModule) }
    , { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
];
