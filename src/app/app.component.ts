import { Component } from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerTitle = "Blog Page";
  title = 'edin-blog-app';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
      },
      {
        label: 'Saved',
        icon: PrimeIcons.HEART_FILL,
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
          },
          {
            label: "Edit",
            icon: 'pi pi-pen-to-square',
          }
        ]
        /** Add nested buttons for upload, write, and ?edit */
      },
      {
        icon: PrimeIcons.USER,
        items: [
          {
            label: "Account Info",
            icon: PrimeIcons.INFO,
          },
          {
            label: "Settings",
            icon: PrimeIcons.COG,
          }
        ]
      }
    ];
  }
}
