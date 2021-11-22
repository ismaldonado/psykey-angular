import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TerapiaIndividualComponent } from './pages/terapia-individual/terapia-individual.component';
import { TerapiaFamiliarComponent } from './pages/terapia-familiar/terapia-familiar.component';
import { TerapiaParejaComponent } from './pages/terapia-pareja/terapia-pareja.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: IndexComponent,
  },
  {
    path: 'terapia-individual',
    component: TerapiaIndividualComponent
  },
  {
    path: 'terapia-familiar',
    component: TerapiaFamiliarComponent
  },
  {
    path: 'terapia-pareja',
    component: TerapiaParejaComponent
  },
  {
    path: 'aviso-legal',
    component: AvisoLegalComponent
  },
  {
    path: 'politica-privacidad',
    component: PoliticaPrivacidadComponent
  },
  {
    path: 'terminos-condiciones',
    component: TerminosCondicionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {
}
