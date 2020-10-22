import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  title= 'Single Joke';
  singleHeading = "Here in Some Catagories for jokesHere is Some";

  constructor() { }

  ngOnInit(): void {
  }
  

}
