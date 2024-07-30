import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { InicioComponent } from "../inicio/inicio.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";

@Component({
  selector: 'app-allnaturaljoyas',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    InicioComponent,
    NosotrosComponent
],
  template: `
      <app-inicio></app-inicio>
      <app-nosotros></app-nosotros>
  `,
  styleUrl: './allnaturaljoyas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllnaturaljoyasComponent { }
