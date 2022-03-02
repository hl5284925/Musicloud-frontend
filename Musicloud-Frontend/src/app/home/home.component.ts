import {Component, Input, OnInit} from '@angular/core';
import {SongsService} from "../songs.service";
import {Subject} from "rxjs";
import {songs} from "../songs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title:string ='';
  song:any =this.songsService.oneSong;
searchSubject = new Subject();


  setVolume(){
    console.log("testing volume function");
  }
  play() {

    console.log("play is working")
  }

  pause() {

  }

  stop() {

  }

  constructor(private songsService: SongsService) {
  }

  getSong(title:string){
    this.searchSubject.next(title)
  }
  ngOnInit(): void {

    // this.searchSubject
    //   .subscribe(song => {
    // //    this.songsService.getSong()
    //       .subscribe(response =>{
    //         console.log(response)
    //         this.song = response;
    //       })
    //  })



  }

}
