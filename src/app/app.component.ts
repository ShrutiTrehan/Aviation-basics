import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APP_CONSTANTS } from './constants/app.constants';

/**
 *structure of each menu item
 *
 * @interface Capability
 */
interface Capability {
  label: string;
  link: string
}
/**
 *application component that is bootstrapped on load
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *holds the environment config to fetch client name for theming
   *
   * @memberof AppComponent
   */
  environment = environment;
  /**
   *constants for application
   *
   * @memberof AppComponent
   */
  APP_CONSTANTS = APP_CONSTANTS;
  /**
   *array list of menu items
   *
   * @type {Capability[]}
   * @memberof AppComponent
   */
  capabilities: Capability[];

  /**
   *Creates an instance of AppComponent.
   * @memberof AppComponent
   */
  constructor() { }

  /**
   *create the array of menu items
   *
   * @memberof AppComponent
   */
  ngOnInit() {
    this.createCapabilityArray();
  }

  /**
   *create a series of links to be shown in nav bar
   *
   * @memberof AppComponent
   */
  createCapabilityArray() {
    this.capabilities = [
      { label: 'Flight Search', link: '/search' },
      { label: 'Flight Selection', link: '/selection' }, { label: 'Group Booking', link: '/selection' }, { label: 'Seat Map', link: '/selection' }]
  }
}
