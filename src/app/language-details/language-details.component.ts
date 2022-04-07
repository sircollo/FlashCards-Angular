import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../language';
@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.css']
})
export class LanguageDetailsComponent implements OnInit {
  @Input()
  language: Language = new Language;
  constructor() { }

  ngOnInit(): void {
  }

}
