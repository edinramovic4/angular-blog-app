import { Component, OnInit } from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
})
export class ComposeComponent implements OnInit {
  headerTitle: string = "Article Title";
  headerContent: string = "Article Content"
  articleTitle: string = "";
  articleContent: string = "";
  articleAuthor: string = "Edin Ramovic"
  articles: Articles[] = data.articles;

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
   /** this.messageService.add({severity: 'error', summary: 'Error', detail: 'Message Content'}); */
  }

  /** Upload article to DB (.json file here) */
  upload (){
    let articleIndex = this.articles.length + 2;
    this.articleContent = this.articleContent.replace(/(<([^>]+)>)/ig, '');
    let newArticle: Articles = {index: articleIndex, saved: false, author: this.articleAuthor, title: this.articleTitle, content: this.articleContent};
    this.articles.push(newArticle);
    /** this.messageService.add({severity: 'success', summary: 'Success', detail: 'Message Content'}); */
  }

}
