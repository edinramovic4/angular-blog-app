import { Component} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerTitle = "Blog Page";
  title = 'edin-blog-app';
  initInput: string = '';
  searchInput: string = '';
  searchResults: boolean = false;
  items: MenuItem[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.toggleSearch();
    });
  }


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: 'home',
        command: () => this.toggleSearch()
      },
      {
        label: 'Article Details',
        icon: PrimeIcons.LIST,
        routerLink: 'details',
        command: () => this.toggleSearch()
      },
      {
        label: 'Saved',
        icon: PrimeIcons.HEART_FILL,
        routerLink: 'saved-articles',
        command: () => this.toggleSearch()
      },
      {
        label: 'Publish',
        icon: 'pi pi-file-plus',
        items: [
          {
            label: "Upload",
            icon: 'pi pi-upload'
          },
          {
            label: "Compose",
            icon: PrimeIcons.PENCIL,
            routerLink: 'compose',
            command: () => this.toggleSearch()
          }
        ]
      },
    ];
  }

  toggleSearch(){
    this.searchResults = false;
    this.initInput = '';
  }

  startSearch() {
    this.searchInput = this.initInput;
    this.searchResults = true;
  }

}
