import { Component, OnInit } from '@angular/core';
import articles from '../../articles.json';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  headerTitle: string = "Article Title";
  headerContent: string = "Article Content"
  articleTitle: string = "";
  articleContent: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  /** Verify if required fields are filled out before attempting to upload */
  verify (){
    console.log("verify() function started")
    if (!this.articleTitle || !this.articleContent){ this.notFilled(); }
    else { this.upload() }
  }

  notFilled (){
    /** insert error message/popup here */
    console.log("notFilled() function started");
  }

  /** Upload article to DB (.json file here) */
  upload (){
    console.log("upload() function started");
  }
}
