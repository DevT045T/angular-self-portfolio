import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

/**
 * ParticlesComponent is responsible for creating and animating particles on a canvas.
 * The particles will be rendered in a purple color and will not fade or shrink over time.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * The canvas element where particles will be rendered.
   * 
   * @var HTMLCanvasElement
   */
  private canvas!: HTMLCanvasElement;

  /**
   * The 2D rendering context of the canvas.
   * 
   * @var CanvasRenderingContext2D
   */
  private ctx!: CanvasRenderingContext2D;

  /**
   * Array to store the particles.
   * 
   * @var Particle[]
   */
  private particles: Particle[] = [];

  /**
   * Variable to store the animation frame ID for stopping the animation.
   * 
   * @var number
   */
  private animationFrameId!: number;

  constructor() { }

  /**
   * ngOnInit lifecycle hook. Runs when the component is initialized.
   * Currently does not perform any actions but is in place for future extensions.
   * 
   * @return void
   */
  ngOnInit(): void {}

  /**
   * ngAfterViewInit lifecycle hook. Runs after the component's view has been initialized.
   * This is where the canvas element is accessed and the particle animation is started.
   * 
   * @return void
   */
  ngAfterViewInit(): void {
    // Get the canvas element and its 2D rendering context
    this.canvas = document.getElementById('tsparticles') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;

    // Resize the canvas to fit the window dimensions
    this.resizeCanvas();

    // Add a resize event listener to adjust canvas size when the window is resized
    window.addEventListener('resize', this.resizeCanvas.bind(this));

    // Create particles and start animating them
    this.createParticles();
    this.animateParticles();
  }

  /**
   * ngOnDestroy lifecycle hook. Runs when the component is destroyed.
   * It is used here to stop the animation and remove event listeners.
   * 
   * @return void
   */
  ngOnDestroy(): void {
    // Stop the animation when the component is destroyed
    cancelAnimationFrame(this.animationFrameId);

    // Remove the resize event listener
    window.removeEventListener('resize', this.resizeCanvas.bind(this));
  }

  /**
   * Resizes the canvas to match the window's inner width and height.
   * 
   * @return void
   */
  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  /**
   * Creates an array of particles with random properties.
   * The particles are generated randomly within the bounds of the canvas.
   * 
   * @return void
   */
  private createParticles(): void {
    const numberOfParticles = 100;  // Number of particles to generate
    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push(new Particle());
    }
  }

  /**
   * Animates the particles by clearing the canvas and updating each particle's position.
   * It requests the next animation frame to continue the animation.
   * 
   * @return void
   */
  private animateParticles(): void {
    // Clear the entire canvas before drawing new particles
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw each particle on the canvas
    for (const particle of this.particles) {
      particle.update(this.ctx);
    }

    // Request the next animation frame
    this.animationFrameId = requestAnimationFrame(this.animateParticles.bind(this));
  }
}

/**
 * Particle class represents an individual particle.
 * Each particle has random starting properties for its position, size, speed, and color.
 * 
 * @package angular-self-portfolio
 * @author t045t
 * @link https://t045t.dev
 * @license MIT
 */
class Particle {
  /**
   * X position of the particle.
   * 
   * @var number
   */
  x: number;

  /**
   * Y position of the particle.
   * 
   * @var number
   */
  y: number;

  /**
   * Size of the particle (fixed size).
   * 
   * @var number
   */
  size: number;

  /**
   * Horizontal speed of the particle.
   * 
   * @var number
   */
  speedX: number;

  /**
   * Vertical speed of the particle.
   * 
   * @var number
   */
  speedY: number;

  /**
   * Opacity of the particle (fixed at 1 to prevent fading).
   * 
   * @var number
   */
  opacity: number;

  constructor() {
    // Initialize particle properties with random values
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = 3;  // Fixed size (particles will no longer shrink)
    this.speedX = Math.random() * 2 - 1;  // Horizontal speed between -1 and 1
    this.speedY = Math.random() * 2 - 1;  // Vertical speed between -1 and 1
    this.opacity = 1;  // Fixed opacity (no fading)
  }

  /**
   * Updates the particle's position and checks if it needs to be repositioned.
   * This method is called on each animation frame.
   * 
   * @param ctx - The canvas 2D rendering context used to draw the particle.
   * 
   * @return void
   */
  update(ctx: CanvasRenderingContext2D): void {
    // Move the particle
    this.x += this.speedX;
    this.y += this.speedY;

    // Reverse direction when the particle reaches the edge of the canvas
    if (this.x > window.innerWidth || this.x < 0) this.speedX = -this.speedX;
    if (this.y > window.innerHeight || this.y < 0) this.speedY = -this.speedY;

    // Draw the particle on the canvas
    this.draw(ctx);
  }

  /**
   * Draws the particle on the canvas as a circle with the specified properties.
   * 
   * @param ctx - The canvas 2D rendering context used to draw the particle.
   * 
   * @return void
   */
  private draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);  // Draw a circle
    ctx.fillStyle = `rgba(128, 0, 128, ${this.opacity})`;  // Purple color with fixed opacity
    ctx.fill();
  }
}
