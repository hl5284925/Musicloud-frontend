import { Component } from '@angular/core';
import {SongsService} from "./songs.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public songs: any;
  constructor(private songsService:SongsService) {
  }

  public getAllSongs():void {
     this.songsService.getAllSongs().subscribe(
       (response: any) => {
         this.songs=response;
       },
       (error:HttpErrorResponse) => {
         alert(error.message)
       }

     )
  }




}
