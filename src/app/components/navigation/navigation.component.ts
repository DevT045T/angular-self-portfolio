/**
 * NavigationComponent
 * 
 * This component handles the navigation menu's toggle functionality. It provides a 
 * mechanism to open and close the menu when triggered, based on the `menuActive` 
 * property. The component uses `toggleMenu()` method to update the state of the 
 * navigation menu.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  /**
   * The state of the navigation menu (true if active, false if inactive).
   * 
   * @var boolean
   */
  menuActive = false;

  /**
   * Toggles the state of the navigation menu.
   * 
   * This method changes the value of `menuActive` to either true or false, depending
   * on its current state. It is used to show or hide the navigation menu when called.
   * 
   * @return void
   */
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
