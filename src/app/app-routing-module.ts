import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ComposeComponent} from "./compose/compose.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {HomeComponent} from "./home/home.component";
import {SavedArticlesComponent} from "./saved-articles/saved-articles.component";

const routes: Routes = [
  {path: 'compose', component: ComposeComponent},
  {path: 'details', component: ArticleDetailsComponent},
  {path: 'saved-articles', component: SavedArticlesComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
