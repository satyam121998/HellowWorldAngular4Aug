import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = 'hello-andular-tdd';

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    window.location.href = "https://google.com"
  }

}
