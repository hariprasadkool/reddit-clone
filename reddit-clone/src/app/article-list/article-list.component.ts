import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  // @Input() articles: Article[];
  private articles: Object[];  // Instance of a class AppComponent  or Instance variable for class AppComponent 

  constructor(
    private articleService: ArticleService
  ) {
   articleService.getArticles()
    .then( articles => this.articles = articles);
  }

  ngOnInit() {
  }

}
