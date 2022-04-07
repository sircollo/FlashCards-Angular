import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  language:Language[]=[
    new Language(1, 'JavaScript',"Used for scripting Web content"),
    new Language(1, 'HTML',"Used for creating the structure of web conttent"),
    new Language(1, 'CSS',"Used for styling HTML elements and give the web content a nice look"),
    new Language(1, 'Jquery',"Used for web content traversal and manipulation"),
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
