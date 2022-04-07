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
    new Language(2, 'HTML',"Used for creating the structure of web conttent"),
    new Language(3, 'CSS',"Used for styling HTML elements and give the web content a nice look"),
    new Language(4, 'Jquery',"Used for web content traversal and manipulation"),
    new Language(5, 'Jquery',"Used for web content traversal and manipulation"),
    new Language(6, 'Jquery',"Used for web content traversal and manipulation"),
    
  ];
  
  toggleDetails(index: any){
    this.language[index].showDetails = !this.language[index].showDetails;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
