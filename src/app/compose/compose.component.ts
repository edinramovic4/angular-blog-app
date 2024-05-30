import { Component, OnInit } from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";
import {ConfirmationService, MessageService, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ComposeComponent implements OnInit {
  headerTitle: string = "Article Title";
  headerContent: string = "Article Content"
  articleTitle: string = "";
  articleContent: string = "";
  title: boolean = true;
  body: boolean = true;
  articleAuthor: string = "Edin Ramovic"
  articles: Articles[] = data.articles;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }


  confirmUpload(event: Event){
    if (!this.articleTitle && !this.articleContent){
      this.title = false;
      this.body = false;
      return;
    }
    else if (!this.articleTitle){
      this.title = false;
      this.body = true;
      return;
    }
    else if (!this.body){
      this.body = false;
      this.title = true;
      return
    }

    this.title = true;
    this.body = true;

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Are you sure you want to upload new article?",
      icon: PrimeIcons.QUESTION_CIRCLE,
      accept: () => {
        this.upload();
        this.messageService.add({severity: 'success', summary: 'Confirmed', detail: 'New Article Posted'});
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'Nothing changed'});
      }
    })
  }

  upload (){
    let articleIndex = this.articles.length;
    this.articleContent = this.articleContent.replace(/(<([^>]+)>)/ig, '');
    let newArticle: Articles = {index: articleIndex, saved: false, author: this.articleAuthor, title: this.articleTitle, content: this.articleContent};
    this.articles.push(newArticle);
    this.articleTitle = "";
    this.articleContent = "";
    /** this.messageService.add({severity: 'success', summary: 'Success', detail: 'Message Content'}); */
  }

}
