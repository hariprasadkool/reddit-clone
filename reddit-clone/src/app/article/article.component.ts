import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    // @Input() article: Object;
    @Input() article: Article;     // Instance of Article Object
  constructor() { }

  ngOnInit() {
  }


    upvote(){
      this.article.voteUp();
    }
  
    downvote(){
      this.article.voteDown();
    }

}
