import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
declare var jQuery: any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {

  private currentFilter: string = 'Time';
  private sortDirection: number = 1;
  constructor(
    private articleService: ArticleService
  ) { }

  changeDirection(){
    // update the direction
    this.sortDirection = this.sortDirection * -1;
    this._upDateSort();
  }

  changeSort(filter: string) {
    // update the filters
    if ( filter === this.currentFilter) {
      this.changeDirection();
    } else {
      this.currentFilter = filter;
      this._upDateSort();
    }
  }
  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();  // It initiates the dropdown and uses it in semantic-css
  }

  _upDateSort() {
    // call sorting on the article service
    this.articleService
    .sortBy(
      this.currentFilter,
      this.sortDirection
    );
  }
}
