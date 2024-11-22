import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { WelcomerComponent } from './components/welcomer/welcomer.component';

import { routes } from './app.routes';

/**
 * AppModule is the root module of the application.
 * It imports necessary Angular modules and declares components used throughout the app.
 * This module is responsible for setting up the application’s main structure.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
@NgModule({
  /**
   * Declarations of components that are part of this module.
   * These components can be used within the application template.
   * 
   * @var Array
   */
  declarations: [
    AppComponent,           // The root component for the application
    NavigationComponent,    // The component responsible for the navigation menu
    ParticlesComponent,     // The component that handles the particle animation
    WelcomerComponent,      // The component that displays the welcome message and user status
  ],
  
  /**
   * Modules imported by this module to bring in necessary Angular functionality.
   * 
   * @var Array
   */
  imports: [
    BrowserModule,          // Provides core Angular services to run in the browser
    HttpClientModule,       // Allows making HTTP requests
    CommonModule,           // Provides common directives like ngIf and ngFor
    RouterModule.forRoot(routes),  // Sets up routing for the application
  ],
  
  /**
   * Bootstrap configuration for the application.
   * The AppComponent is the first component that will be loaded and displayed.
   * 
   * @var Array
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
