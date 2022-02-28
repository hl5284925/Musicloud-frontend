import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class SongsService {

private apiUrl = 'http:/morning-lowlands-30800.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getAllSongs():Observable<any>{
    return this.http.get<SongsService>(`${this.apiUrl}/api/songs/`)
  }

  public createSong(song: SongsService){
    return this.http.post<SongsService>(`${this.apiUrl}/api/songs/`,song)
  }

  public getSong(song: SongsService):Observable<any>{
    return this.http.get<SongsService>(`${this.apiUrl}/api/songs/`)
  }

  public updateSong(song: SongsService):Observable<any>{
    return this.http.put<SongsService>(`${this.apiUrl}/api/songs/id`,song)
  }

  public deleteSong(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/api/songs/${id}`)
  }

}
