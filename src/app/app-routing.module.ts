import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewImageComponent } from './view-image/view-image.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'app-view-image/:name', component: ViewImageComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: '**', component: ErrorPageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
