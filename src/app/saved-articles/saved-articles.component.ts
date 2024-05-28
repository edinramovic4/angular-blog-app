import { Component, OnInit } from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";



@Component({
  selector: 'app-saved-articles',
  templateUrl: './saved-articles.component.html',
  styleUrls: ['./saved-articles.component.css']
})
export class SavedArticlesComponent implements OnInit {
  articles: Articles[] = data.articles;
  displayEdit: boolean = false;
  editArticle: Articles = this.articles[0];

  constructor() { }

  ngOnInit(): void {
  }

  changeSave(index: number) {
    if (this.articles[index].saved) { this.articles[index].saved = false; }
    else { this.articles[index].saved = true; }
    this.updateFile(index);
  }

  updateFile(index: number) {

  }

  ImgRouteFor(index: number) : string{
    let imgRoute = "assets/images/uline" + index + ".png";
    return imgRoute;
  }

  showEditScreen(index: number) {
    this.displayEdit = true;
    if (this.editArticle != this.articles[index]){this.editArticle = this.articles[index];}
  }

}
