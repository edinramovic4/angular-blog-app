import { Component, OnInit } from '@angular/core';
import {EditorModule} from "primeng/editor";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-compose-field',
  templateUrl: './compose-field.component.html',
  styleUrls: ['./compose-field.component.css']
})
export class ComposeFieldComponent implements OnInit {
  articleHeader: string = '';
  articleText: string = '';
  headerTitle: string;
  headerBody: string;
  pageTitle: string;


  constructor() {
    this.pageTitle = "Compose your article below!";
    this.headerTitle = "Title of Article";
    this.headerBody = "Article Content";
  }

  ngOnInit(): void {
  }

}
