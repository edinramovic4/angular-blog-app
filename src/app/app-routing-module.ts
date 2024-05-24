import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ComposeComponent} from "./compose/compose.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";

const routes: Routes = [
  {path: 'compose', component: ComposeComponent},
  {path: 'details', component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
