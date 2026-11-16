
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly name = 'Wil';
  readonly role = 'Full Stack Software Developer';

  readonly counter = signal(0);

  readonly technologies = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'C#',
    '.NET',
    'NgRx',
    'SQL'
  ];

  increment(): void {
    this.counter.update(value => value + 1);
  }

  decrement(): void {
    this.counter.update(value => Math.max(0, value - 1));
  }

  reset(): void {
    this.counter.set(0);
  }
}
