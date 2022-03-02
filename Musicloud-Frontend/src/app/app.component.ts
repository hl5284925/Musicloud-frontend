import {Component, OnInit} from '@angular/core';
import {SongsService} from "./songs.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private songsService:SongsService) {}

  ngOnInit() {
this.songsService.getAllSongs();
  }






}
