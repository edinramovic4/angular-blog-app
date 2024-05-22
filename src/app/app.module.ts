import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
