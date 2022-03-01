import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {SongsService} from "../songs.service";
import {songs} from "../songs";
// import {songs} from "../songs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
   search: string ='';
   song:any;
   searchSubject = new Subject();

  constructor(public songsService: SongsService) { }

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(1000),distinctUntilChanged())
      .subscribe(search => {
        this.songsService.getAllSongs(this.song)

      })

  }

  getAllSongs(search: string) {
    console.log("testing in search bar to get all songs")
    this.searchSubject.next(search)
  }


}
