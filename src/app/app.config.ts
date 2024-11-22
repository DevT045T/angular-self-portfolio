import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

/**
 * appConfig contains the configuration for the application.
 * It provides the necessary Angular services for routing and HTTP client functionality.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
export const appConfig = {
  /**
   * Providers for the application, including the router and HTTP client.
   * 
   * @var Array
   */
  providers: [
    provideRouter([]),  // Provides routing functionality (currently no routes defined)
    provideHttpClient(), // Provides HTTP client functionality for making HTTP requests
  ],
};
