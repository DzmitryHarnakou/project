import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  labels = [
    {text:"Action", value: false},
    {text:"Adventure", value: false},
    {text:"Thriller", value: false},
    {text:"Comedy", value: false},
    {text:"Fantasy", value: false},
    {text:"Drama", value: false},
    {text:"Horor", value: false},
    {text:"Criminal", value: false},
    {text:"War", value: false},
    {text:"Documentary", value: false},
  ]

  constructor() { }

  ngOnInit() {
  }

}
