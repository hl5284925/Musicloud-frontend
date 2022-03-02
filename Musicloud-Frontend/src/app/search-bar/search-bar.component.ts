import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {SongsService} from "../songs.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
   search: string =''
song:any;
   searchSubject = new Subject();
 // results: any = []

  constructor(public songsService: SongsService) { }

ngOnInit():void{
  this.searchSubject
    .pipe(debounceTime(1000),distinctUntilChanged())
    .subscribe(search => {
      console.log(search)
   //   let id:number = search;
      this.songsService.setOneSong(search)
      this.song = this.songsService.oneSong
    })
}


  // getAllSongs(search: string) {
  //   this.results =[];
  //   console.log(search)
  //   console.log("testing in search bar to get all songs")
  //   console.log(this.songsService.songs);
  //   this.searchSubject.next(search)
  //
  //   this.song.forEach(s => {
  //     if (s.title.toLowerCase().includes(search) || s.artist.toLowerCase().includes(search)) {
  //       this.results.push(s);
  //       console.log(this.results)
  //     }
  //
  //   })
  //
  // }

  getSong(search: string) {
    console.log("testing in search bar to get one song")
    console.log(this.songsService.songs);
    let allSongs : any[] = this.songsService.songs;
    console.log(allSongs)
    console.log(search)
     let currentSong:any =  allSongs.find(song =>{
      return song.title ===search;
    })
    console.log(currentSong);
    this.searchSubject.next(currentSong)
  }

}
