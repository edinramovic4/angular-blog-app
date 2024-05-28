import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerTitle = "Blog Page";
  title = 'edin-blog-app';
  searchInput: string = '';
  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: 'home'
      },
      {
        label: 'Article Details',
        icon: PrimeIcons.LIST,
        routerLink: 'details',
      },
      {
        label: 'Saved',
        icon: PrimeIcons.HEART_FILL,
        routerLink: 'saved-articles'
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
            routerLink: 'compose'
          },
          {
            label: "Edit",
            icon: 'pi pi-pen-to-square',
          }
        ]
        /** Add nested buttons for upload, write, and ?edit */
      },
    ];
  }

}
