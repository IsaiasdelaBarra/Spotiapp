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


  getQuery( query: string){

    const url =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCTMqvOK8Km2gzBF-y26Y1rGNXL7HFFsdaHeMDkSbmHhfkWQLro0-Wszo4Dyc7y4Cn745UabM9SNB1zEVHk9H3mIqY5-4E4vRFnYa_BI8yXakYbOAY'
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
