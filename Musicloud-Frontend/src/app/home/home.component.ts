import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  play() {

    console.log("play is working")
  }

  pause() {

  }

  stop() {

  }

  constructor() {
  }

  ngOnInit(): void {


  }

}
