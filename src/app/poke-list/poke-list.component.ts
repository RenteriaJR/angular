import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
    constructor(private apiService: ApiService, private notification: NotificationServiceService) {}
    pokemons: any[] = [];
    pokemonsFiltered: any[] = [];

    ngOnInit(): void {
        this.notification.notificationHome();
        this.apiService.getPokemonList().subscribe(
            (list: any[]) => {
                this.pokemons = list;
                this.pokemonsFiltered = list;
            }
        )
    }

    filterPokemons(pokemonName: any) {
        this.pokemonsFiltered = this.pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );
    }
}
