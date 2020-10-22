import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-part',
  templateUrl: './two-part.component.html',
  styleUrls: ['./two-part.component.css']
})
export class TwoPartComponent implements OnInit {

  title= 'Two part Joke';
  singleHeading = "Here in Some Catagories for jokesHere is Some";

  constructor() { }

  ngOnInit(): void {
  }

}
