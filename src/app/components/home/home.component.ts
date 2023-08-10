import { Component } from '@angular/core';
import {SpotifyService} from '../../Services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


      nuevasCanciones: any[] = [];
      //iniciamos el loading como booleano
      loading: boolean;

      constructor(private spotify: SpotifyService){

        //Le damos el valor true
        this.loading= true;


        this.spotify.getNewReleases()
          .subscribe ((data : any) => {
            this.nuevasCanciones = data;
            //A este punto ya tenemos la data y lo pasamos a false
            this.loading = false;
          });
      }
}
