import {Component, Input, OnInit} from '@angular/core';
import data from '../../articles.json';
import {Articles} from "../articles";
import {ConfirmationService, MessageService, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ArticleViewComponent implements OnInit {
  @Input() isHomePage: boolean = false;
  imgRoute: string = '';
  changes: string = ''
  articles: Articles[] = data.articles;
  filtered: Articles[] = this.articles;
  displayEdit: boolean = false;
  editArticle: Articles = this.articles[0];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    console.log(this.articles)
    if (!this.isHomePage){
      this.filterArticles();
    }
  }

  filterArticles(){
    this.filtered = this.articles.filter(
      (article) => article.saved
    );
  }

  changeSave(index: number) {
    this.articles[index].saved = !this.articles[index].saved;

    if (!this.isHomePage){this.filterArticles();}
    // this.updateFile(index);
  }

  // updateFile(index: number) {
  //
  // }

  ImgRouteFor(index: number) : string{
    this.imgRoute = "assets/images/uline" + index + ".png";
    return this.imgRoute;
  }

  showEditScreen(index: number) {
    this.displayEdit = true;
    if (this.editArticle != this.articles[index]){
      this.editArticle = this.articles[index];
      this.changes = this.editArticle.content;
    }
    else { this.changes = this.editArticle.content; }
  }


  confirmSave(event: Event, index: number){
    if (this.isHomePage){
      this.changeSave(index);
      return;
    }
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Are you sure you want to remove article from saved?",
      icon: PrimeIcons.QUESTION_CIRCLE,
      accept: () => {
        this.messageService.add({severity: 'success', summary: 'Confirmed', detail: 'Article unsaved'});
        this.changeSave(index);
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'Nothing changed'});
      }
    });
  }

  confirmChanges(event: Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Do you want to confirm the changes?",
      icon: PrimeIcons.QUESTION_CIRCLE,
      accept: () => {
        this.messageService.add({severity: 'success', summary: 'Confirmed', detail: 'Article updated'});
        this.editArticle.content = this.changes;
        this.displayEdit = false;
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'No changes'});
      }
    });
  }
}
