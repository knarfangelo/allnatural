import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
      <h1>Nosotros</h1>
      <main>
        <p>Marca de joyería fina peruana que visibiliza conceptos de la responsabilidad ambiental y el cuidado de este mediante sus productos 100% naturales y realizados a mano. Promoviendo la creatividad y originalidad de cada uno.</p>
        <video autoplay muted loop src="video-nosotros.mp4"></video>
      </main>
  </header>

  `,
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { }
