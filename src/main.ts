declare var process: any;
declare var module: any;

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {App, APP_PROVIDERS} from './app';

export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    ...APP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
    .catch(err => console.error(err));
}

if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when documetn is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
