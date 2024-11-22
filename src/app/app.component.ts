import { Component } from '@angular/core';

/**
 * AppComponent is the root component of the application.
 * It serves as the main entry point of the Angular application.
 * The component displays the application title and serves as a wrapper 
 * for other components that are included in the application.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * The title of the application.
   * This title is used in the UI to display the name of the portfolio.
   * 
   * @var string
   */
  title = 'portfolio';
}
