import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WebsiteRoutingModule } from './website-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { TerapiaIndividualComponent } from './pages/terapia-individual/terapia-individual.component';
import { TerapiaFamiliarComponent } from './pages/terapia-familiar/terapia-familiar.component';
import { TerapiaParejaComponent } from './pages/terapia-pareja/terapia-pareja.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    IndexComponent,
    TerapiaIndividualComponent,
    TerapiaFamiliarComponent,
    TerapiaParejaComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,
    TerminosCondicionesComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumsComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FontAwesomeModule,
    NgbCarouselModule
  ],
  providers: [NgbCarouselConfig]
})
export class WebsiteModule {
}
