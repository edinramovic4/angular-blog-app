import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import data from '../../articles.json';
import {Articles} from "../articles";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  index: number = 0;
  imgRoute: string = '';
  article: Articles = data.articles[0];

  constructor(private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.index = Number.parseInt(this.route.snapshot.params['index']);
    if (this.index != 0) { this.article = data.articles[this.index]; }
  }

  returnBack (){
    this.location.back();
  }

  ImgRouteFor(index: number) : string{
    this.imgRoute = "assets/images/uline" + index + ".png";
    return this.imgRoute;
  }

  changeSave() {
    this.article.saved = !this.article.saved;
  }
}
