import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "juegos", component: JuegosComponent},
  {path: "precio", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
