import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {songs} from "./songs";



@Injectable({
  providedIn: 'root'
})
export class SongsService {
songs:any;
oneSong:any;
private apiUrl = 'https://morning-lowlands-30800.herokuapp.com';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllSongs()
  }

  public getAllSongs() {
    console.log();
     this.http.get(`${this.apiUrl}/api/songs/`)
       .subscribe(res =>{
         console.log(res)
         this.songs = res
         }
       )

  }



  public createSong(song: any){

    return this.http.post(`${this.apiUrl}/api/songs/`,song)
  }

  // public getSong(id: any){
  //    this.http.get(`${this.apiUrl}/api/songs/${id}`)
  //      .subscribe(res =>{
  //        this.oneSong = res
  //        console.log(this.oneSong)
  //
  //      })
  // }

  public setOneSong(song:any){
    this.oneSong =song;
    console.log(this.oneSong)
  }

  public updateSong(song: any):Observable<any>{
    return this.http.put(`${this.apiUrl}/api/songs/id`,song)
  }

  public deleteSong(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/api/songs/${id}`)
  }

}
