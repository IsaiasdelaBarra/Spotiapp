import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

   //Aca insertar token de spotify
  getQuery( query: string){

    const url =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCY1cKnuDHXL5M1rE2uHzvyNLcXj2_6WLjUOH4O6RZ7aqfQyWapQglAvmw31q8BiCr5YleaG1AUMiS16iVHD0e4oKXK92pGd-ku639p4dTXiVB3jp0'
   });

   return this.http.get(url, {headers});

  }

  getNewReleases(){

    //Headers antes de optimizacion
    /* const headers = new HttpHeaders({
       'Authorization': 'Bearer BQCMIc-1cbs0IdcR8ezG7kUG0THdVX_QVZq9fDRkFJTLkU7yvWV1IkKC7lFfSvdkrYekCUYUNujSKajD3jHXPxcqX0T3ELfEl293yazdShWBnIicrJ8'
    }); */

    return this.getQuery('browse/new-releases?=limit=20')
          .pipe( map( data => data['albums'].items));

  }

  getArtistas(termino: string){
    
    //Headers antes de optimizacion
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCMIc-1cbs0IdcR8ezG7kUG0THdVX_QVZq9fDRkFJTLkU7yvWV1IkKC7lFfSvdkrYekCUYUNujSKajD3jHXPxcqX0T3ELfEl293yazdShWBnIicrJ8'
   });*/

    return this.getQuery(`search?q=${termino}&type=artist&market=US&offset=0`)
        .pipe ( map( data => data['artists'].items));
   
  }


  getArtista(id: string){
    
    return this.getQuery(`artists/${id}`);
        //.pipe ( map( data => data['artists'].items));
   
  }

  getTopTracks(id: string){
    
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe ( map( data => data['tracks']));
   
  }

}
