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
      'Authorization': 'Bearer BQAOFwfU_NVzWiLOO9FtWfEaDxcoJf0GTlYo4v6ilusFHGLAm5UrQ7F0c1o-V2EX5yXSCIR-D3DGZvgpnYqb3kS84w025USKa_WzWaCqqYHxwzMTAxE'
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

  getArtista(termino: string){
    
    //Headers antes de optimizacion
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCMIc-1cbs0IdcR8ezG7kUG0THdVX_QVZq9fDRkFJTLkU7yvWV1IkKC7lFfSvdkrYekCUYUNujSKajD3jHXPxcqX0T3ELfEl293yazdShWBnIicrJ8'
   });*/

    return this.getQuery(`search?q=${termino}&type=artist&market=US&offset=0`)
        .pipe ( map( data => data['artists'].items));
   
  }


}
