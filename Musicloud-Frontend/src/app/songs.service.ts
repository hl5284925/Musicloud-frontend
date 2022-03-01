import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class SongsService {
songs:any;

private apiUrl = 'http://morning-lowlands-30800.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getAllSongs(search: string):any {
    return this.http.get(`${this.apiUrl}/api/songs/`)

  }



  public createSong(song: any){
    return this.http.post(`${this.apiUrl}/api/songs/`,song)
  }

  public getSong(song: any):Observable<any>{
    return this.http.get(`${this.apiUrl}/api/songs/`)
  }

  public updateSong(song: any):Observable<any>{
    return this.http.put(`${this.apiUrl}/api/songs/id`,song)
  }

  public deleteSong(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/api/songs/${id}`)
  }

}
