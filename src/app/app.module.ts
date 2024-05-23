import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { SavedArticlesComponent } from './saved-articles/saved-articles.component';
import { ComposeArticleComponent } from './compose-article/compose-article.component';
import { EditArticlesComponent } from './edit-articles/edit-articles.component';
import { ComposeFieldComponent } from './compose-article/compose-field/compose-field.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SavedArticlesComponent,
    ComposeArticleComponent,
    EditArticlesComponent,
    ComposeFieldComponent,
    AccountInfoComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
