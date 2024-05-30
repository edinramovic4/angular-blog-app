import {Component, Input, OnInit} from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  articles: Articles[] = data.articles;
  filtered: Articles[] = this.articles;
  isAuthor: boolean = false;
  @Input() search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  resultCheck(): boolean {
    if (this.articles.some(a => a.author.toLowerCase().startsWith(this.search.toLowerCase()))) {
      this.isAuthor = true;
      this.filterArticles();
      return true;
    } else if (this.articles.some(a => a.title.toLowerCase().startsWith(this.search.toLowerCase()))) {
      this.filterArticles();
      return true
    } else { return false; }
  }

  filterArticles(){
    if (this.isAuthor){
      this.filtered = this.articles.filter(
        (article) => article.author.toLowerCase().startsWith(this.search.toLowerCase())
      );
    }
    else {
      this.filtered = this.articles.filter(
        (article) => article.title.toLowerCase().startsWith(this.search.toLowerCase())
      );
    }
  }

  changeSave(index: number) {
    this.articles[index].saved = !this.articles[index].saved;
  }
}
