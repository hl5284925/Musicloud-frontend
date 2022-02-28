import { Component, OnInit } from '@angular/core';
import {SongListService} from "../song-list.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  song:any;

  constructor(private songListService: SongListService) { }

  ngOnInit(): void {
    console.log("testing song list")
  }

  searchSong(){
   console.log("testing search song method")
  }

}
