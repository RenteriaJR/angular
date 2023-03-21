import { Component } from '@angular/core';
import { PokemonDetails } from 'src/app/Models/pokemon-details.model';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationServiceService } from '../services/notification-service.service';



@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent {
  details: any = {name: ''};
    name = '';
    pokemonDetails!: PokemonDetails;

    constructor(
        private apiService: ApiService,
        private activatedRoute: ActivatedRoute,
        private notification: NotificationServiceService,
        ) {}

    ngOnInit(): void {
      this.notification.notificationImage();
        this.name = this.activatedRoute.snapshot.params['name'];
        this.apiService.getPokemonByName(this.name).subscribe(result => this.details = result)
        this.apiService.getPokemonByName(this.name).subscribe(result => {
            this.pokemonDetails = result;
        });
    }
}
