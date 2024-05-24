import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { ComposeComponent } from './compose/compose.component';
import {AppRoutingModule} from "./app-routing-module";
import {EditorModule} from "primeng/editor";
import {FormsModule} from "@angular/forms";
import { ArticleDetailsComponent } from './article-details/article-details.component';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    AppComponent,
    ComposeComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
