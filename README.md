# Angular Portfolio App

## Description

This is a lightweight and customizable **Angular Portfolio Application** designed for personal use. It integrates various components like navigation, particle effects, and a welcoming screen. The app's core is built with Angular 18 and provides an organized way to display content on your portfolio site.

The app leverages Angular services to manage configuration and utilizes routing to navigate between views.

## Features

- **Component-Based Architecture**: Organizes the app into reusable components like Navigation, Particles, and Welcomer.
- **Routing Support**: The app uses Angular's Router to manage navigation between components.
- **Config Management**: Easily customize the application by managing configurations in a central `config.ts` file.
- **Integration with External Services**: Includes configuration for external APIs, such as Discord, with easy-to-manage services.
- **Lightweight and Extendable**: Easily add new features or replace components without affecting the overall structure.

## Installation

To use the **Angular Portfolio App** in your project, follow these steps:

### 1. Install Node.js and Angular CLI

Ensure that [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) are installed on your system. If they're not installed yet, you can install them using the following commands:

```bash
# Install Node.js
npm install -g node

# Install Angular CLI
npm install -g @angular/cli
```

### 2. Clone the Repository

Clone the repository into your desired project directory:

```bash
git clone https://github.com/YourRepo/angular-portfolio.git
```

### 3. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd angular-portfolio
npm install
```

### 4. Configure the App

Adjust the configuration file `config.ts` with the correct Discord user ID for integration. Example:

```typescript
export const config = {
  discord_user_id: 'your-discord-user-id',
};
```

### 5. Start the Development Server

Run the app locally by using the Angular CLI:

```bash
ng serve
```

By default, the application will be available at `http://localhost:4200/`.

## Usage

### 1. Configure Discord User ID

The app is integrated with Discord to show your status via the [Lanyard API](https://discord.gg/lanyard). To use this feature, update the `config.ts` file with your own Discord User ID.

```typescript
export const config = {
  discord_user_id: 'your-discord-user-id', // Replace with your Discord User ID
};
```

### 2. Routing Setup

The app uses Angular’s Router for navigation between views. The routing configuration is set up in `app.routes.ts` and points to the `WelcomerComponent` as the default route.

```typescript
import { Routes } from '@angular/router';
import { WelcomerComponent } from './components/welcomer/welcomer.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomerComponent
  }
];
```

### 3. Customize the Components

The app comes with the following components:
- **NavigationComponent**: Handles navigation between sections.
- **ParticlesComponent**: Displays a dynamic particle effect background.
- **WelcomerComponent**: Displays a welcome message or introductory content.

You can modify these components to suit your needs. For example, to change the message in `WelcomerComponent`, open the component file and update the content.

### Example: Update Welcomer Component Message

In `welcomer.component.ts`:

```typescript
export class WelcomerComponent {
  welcomeMessage = 'Welcome to My Portfolio!';
}
```

## Available Methods and Services

### ConfigService

The `ConfigService` is responsible for managing configurations such as the Discord User ID and other app-wide settings.

```typescript
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getDiscordUserId(): string {
    return config.discord_user_id;
  }
}
```

### API Integration

The app can be extended to integrate with other APIs, such as Discord, using the Discord User ID stored in `config.ts`. For example, you can fetch user data or display status with the Lanyard API.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

### Contributing

Feel free to fork this project, make improvements, and submit pull requests. Contributions are always welcome!
