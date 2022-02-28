import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  search: string ='';


  searchSong(song:any){
    console.log("test search song function")
  }

  constructor() { }

  ngOnInit(): void {


  }

}
