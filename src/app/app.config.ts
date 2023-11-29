import { ApplicationConfig, importProvidersFrom ,LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import localept from '@angular/common/locales/pt';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
registerLocaleData(localept, 'pt');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(HttpClientModule), provideHttpClient(withFetch()), {
    provide: LOCALE_ID,
    useValue: 'pt'
  }
  ]

};
