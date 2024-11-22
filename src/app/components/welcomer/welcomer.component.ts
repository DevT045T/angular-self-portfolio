import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ConfigService } from '../../core/services/config.service';

/**
 * WelcomerComponent is responsible for displaying the user's status
 * and Spotify listening information by fetching data from an API.
 * The component periodically fetches the user's status and updates the UI accordingly.
 */
@Component({
  selector: 'app-welcomer',
  templateUrl: './welcomer.component.html',
  styleUrls: ['./welcomer.component.scss'],
})
export class WelcomerComponent implements OnInit {
  /**
   * Represents the current user status (e.g., online, offline).
   * 
   * @var string
   */
  public userStatus: string = 'offline';

  /**
   * The user's Discord user ID.
   * 
   * @var string | null
   */
  public uid: null | string = null;

  /**
   * Flag indicating whether the component has finished loading the data.
   * 
   * @var boolean
   */
  public ready: boolean = false;

  /**
   * Contains information about the user's Spotify account and activity.
   * 
   * @var any
   */
  public spotify: any;

  /**
   * Flag indicating whether the user is currently listening to Spotify.
   * 
   * @var boolean
   */
  public listening_to_spotify: boolean = false;

  /**
   * Constructor for the WelcomerComponent.
   * 
   * @param http - The HTTP client used for making requests.
   * @param configService - The service for accessing the configuration.
   */
  constructor(private http: HttpClient, private configService: ConfigService) { }

  /**
   * ngOnInit lifecycle hook.
   * Runs when the component is initialized. It fetches the user's Discord user ID and
   * starts periodically updating the hero information (every 10 seconds).
   * 
   * @return void
   */
  ngOnInit() {
    // Fetch the Discord user ID from the configuration service.
    this.uid = this.configService.getDiscordUserId();

    // Fetch and set the user's hero information immediately.
    this.setHeroInformations();

    // Set a recurring interval to fetch hero information every 10 seconds.
    setInterval(() => {
      this.setHeroInformations();
    }, 10000);
  }

  /**
   * Fetches the hero information from the Lanyard API.
   * This method sends a GET request to the Lanyard API to get the user's status and Spotify data.
   * 
   * @return Observable<any> - The observable containing the user data.
   */
  getHeroInformations(): Observable<any> {
    return this.http.get(`https://api.lanyard.rest/v1/users/${this.uid}`);
  }

  /**
   * Sets the hero information by subscribing to the data from the Lanyard API.
   * It updates the user status and Spotify listening information based on the response.
   * 
   * @return void
   */
  setHeroInformations(): void {
    this.getHeroInformations()
      .pipe(
        tap((res) => {
          // If the API response is successful, update the status and Spotify information.
          if (res.success) {
            this.userStatus = res.data.discord_status;
            this.spotify = res.data.spotify;
            this.listening_to_spotify = res.data.listening_to_spotify;
          }
          // Mark the component as ready after fetching data.
          this.ready = true;
        })
      )
      .subscribe(() => {
        // Set the ready flag to true when the subscription is complete.
        this.ready = true;
      });
  }
}
