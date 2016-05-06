import {Component, OnInit} from 'angular2/core';
import {Country} from './countrymodel';
import {Countries} from './countries';
import {CountryService} from './countryservice';

  @Component({
    moduleId: module.id,  
    selector: 'countries',
    template: `
        <p>{{desc}}<p>
    `,
    directives: [Countries],
    providers: [CountryService]
})
  export class Countries implements OnInit {
    countries : this.CountryService
  constructor(private countryservice:CountryService) { }
  
  ngOnInit(){
      this.
      
  }
  
  
}
