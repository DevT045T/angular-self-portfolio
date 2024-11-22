import { Injectable } from '@angular/core';
import { config } from '../../configs/config';

/**
 * ConfigService is responsible for providing configuration values 
 * to the rest of the application.
 * This service fetches the Discord user ID and other configuration values 
 * defined in the config file.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  constructor() { }

  /**
   * Retrieves the Discord user ID from the configuration.
   * This ID is used to fetch user-specific data from external APIs.
   * 
   * @return string The Discord user ID.
   */
  getDiscordUserId(): string {
    return config.discord_user_id;
  }
}
