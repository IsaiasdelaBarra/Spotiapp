import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './Pages/list/list.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


//Importar rutas
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
//Services
import { SpotifyService } from './Services/spotify.service';

// El import de los pipes
import { NoimagePipe } from './pipes/noimage.pipe';

//Import de la optimizacion de las tarjetas
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


//Declaraciones de modulos
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash : true} ),
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
