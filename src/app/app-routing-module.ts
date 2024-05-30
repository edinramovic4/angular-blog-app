import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ComposeComponent} from "./compose/compose.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {HomeComponent} from "./home/home.component";
import {SavedArticlesComponent} from "./saved-articles/saved-articles.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import {ReadComponent} from "./read/read.component";

const routes: Routes = [
  {path: 'search', title: 'Search Component', component: SearchResultsComponent},
  {path: 'compose', title: 'Compose Component', component: ComposeComponent},
  {path: 'details', title: 'Details Component', component: ArticleDetailsComponent},
  {path: 'saved-articles', title: 'Saved Component', component: SavedArticlesComponent},
  {path: 'home', title: 'Home Component',component: HomeComponent},
  {path: 'read/:index', title: 'Read Component', component: ReadComponent},
  {path: '', title: 'Home Component',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
