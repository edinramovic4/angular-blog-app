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
import { HomeComponent } from './home/home.component';
import { SavedArticlesComponent } from './saved-articles/saved-articles.component';
import {CardModule} from "primeng/card";
import { SearchResultsComponent } from './search-results/search-results.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";
import { ArticleViewComponent } from './article-view/article-view.component';
import { ReadComponent } from './read/read.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {MessageModule} from "primeng/message";


@NgModule({
  declarations: [
    AppComponent,
    ComposeComponent,
    ArticleDetailsComponent,
    HomeComponent,
    SavedArticlesComponent,
    SearchResultsComponent,
    ArticleViewComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    TableModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    ToastModule,
    InputTextareaModule,
    MessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
