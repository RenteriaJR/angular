import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ApiService } from './services/api.service';

import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { UpperCaseCustomPipe } from './pipes/upper-case-custom.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { ContactComponent } from './contact/contact.component';
import { LengthPokeNamePipe } from './pipes/length-poke-name.pipe';
import { ConvertPokeNameToHexaPipe } from './pipes/convert-poke-name-to-hexa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokemonDetailsComponent,
    PokeCardComponent,
    UpperCaseCustomPipe,
    NavbarComponent,
    FooterComponent,
    ErrorPageComponent,
    ViewImageComponent,
    ContactComponent,
    LengthPokeNamePipe,
    ConvertPokeNameToHexaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
