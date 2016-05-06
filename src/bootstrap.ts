import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Header} from  './components/header';
import {Body} from  './components/body';
import {Countries} from  './components/countries';
import {Footer} from './components/footer';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'app',
  template: `
    <header></header>
   <router-outlet></router-outlet>
    <footer></footer>
  `,
  
  
  directives : [Header,ROUTER_DIRECTIVES, Footer],
   providers : [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: Body,
    useAsDefault: true 
  },
  
   {
    path: '/countries',
    name: 'Countries',
    component: Countries
    
  },
 
])
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
