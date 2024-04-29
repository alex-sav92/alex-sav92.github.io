import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  
  providers: [provideRouter(routes, withComponentInputBinding())]
};
