import { Routes } from '@angular/router';
import { WelcomerComponent } from './components/welcomer/welcomer.component';

/**
 * Define the application's routes.
 * This configuration maps URL paths to Angular components.
 * The application has only one route for now, which directs to the WelcomerComponent.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
export const routes: Routes = [
  {
    /**
     * The default route for the application.
     * When the URL path is empty (""), it matches and loads the WelcomerComponent.
     * The pathMatch property with "full" ensures that the full URL must be empty to match this route.
     */
    path: "",
    pathMatch: "full",
    component: WelcomerComponent,
  }
];
