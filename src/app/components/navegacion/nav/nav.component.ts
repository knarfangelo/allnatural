import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <ul>
      <li><a href="">INICIO</a></li>
      <li><a href="">NOSOTROS</a></li>
      <li><a href="">PRODUCTOS</a></li>
      <li><a href="">CONTACTANOS</a></li>
    </ul>
  `,
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent { }
