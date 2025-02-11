import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `
    <header>
        <app-navegacion></app-navegacion>
        <img class="fondo-inicio" src="/fondo-2.jpeg" alt="">
        <div class="logo">
          <p>
            <strong>ALL<br>NATURAL</strong><br>Joyería Fina</p>
        </div>
    </header>
  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
