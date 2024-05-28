import { Component, OnInit } from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Articles[] = data.articles;
  displayEdit: boolean = false;
  editArticle: Articles = this.articles[0];

  constructor() { }

  changeSave(index: number) {
    if (this.articles[index].saved) { this.articles[index].saved = false; }
    else { this.articles[index].saved = true; }
    this.updateFile(index);
  }

  ImgRouteFor(index: number) : string{
    let imgRoute = "assets/images/uline" + index + ".png";
    return imgRoute;
  }

  updateFile(index: number) {

  }

  showEditScreen(index: number) {
    this.displayEdit = true;
    if (this.editArticle != this.articles[index]){this.editArticle = this.articles[index];}
  }


  ngOnInit(): void {
  }

}
