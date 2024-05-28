import { Component, OnInit } from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  fileName: string = '../../articles.json';
  articles: Articles[] = data.articles;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSave(index: number) {
    if (this.articles[index].saved) {
      this.articles[index].saved = false;
    } else {
      this.articles[index].saved = true;
    }
    this.updateFile();
  }

  updateFile() {
    let articlesJson = JSON.stringify(this.articles);
  }
}
