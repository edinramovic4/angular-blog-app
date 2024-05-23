import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-article',
  templateUrl: './compose-article.component.html',
  styleUrls: ['./compose-article.component.css']
})
export class ComposeArticleComponent implements OnInit {
  headerTitle = "Compose New Article";


  constructor() { }

  ngOnInit(): void {
  }

}
