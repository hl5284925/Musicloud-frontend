import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  constructor(private httpClient: HttpClient) { }




  getSongList() {
    console.log("testing get song list")
  //  return this.httpClient.get(`http://morning-lowlands-30800.herokuapp.com/api/songs/`)

  }
}
