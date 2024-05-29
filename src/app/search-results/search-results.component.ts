import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() search: string = '';
  priorSearch: string = '';

  constructor() { }

  ngOnInit(): void {
    this.priorSearch = this.search
  }

}
