import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
];

export * from './app';
