import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // providers: [ ArticleService] // At first angular will look at ArticleService in component level inside providers, if not there, then it will look for ArticleService in root or app-module level inside providers
})
export class AppComponent {
  articles: Object[];  // Instance of a class AppComponent  or Instance variable for class AppComponent 

  constructor(
    private articleService: ArticleService
  ) {
   this.articles = articleService.getArticles();
  }
}
