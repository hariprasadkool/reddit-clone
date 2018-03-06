import { Component, Input } from '@angular/core';



class Article {

  constructor(  public title: string,
    public description: string) {

  }


}




@Component({
  selector: 'app-sidebar',
  template: `
  <div id="sidebar">
    Sidebar will go here
  </div>
  `,
})
export class SidebarComponent{

}


@Component({
  selector: 'app-article',
  template: `
  <div class='image'>
    <img src="https://placekitten.com/g/400/300" />
  </div>
  <div class="content">
    <div class="header">
    {{article.title}}
    </div>
    <div class="meta">
      Voting and votes will go here
    </div>
    <div class="meta date">
      Today
    </div>
    <div class="meta description">
      <p>{{ article.description }}</p>
    </div>
    <div class="extra">
      <a href="#" target="_blank" class="ui right floated button primary"> Read More <i class="right chevron icon"> </i> </a>
    </div>
  </div>
  `
})
export class ArticleComponent{
  // @Input() article: Object;
  @Input() article: Article;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="ui container">
      <app-sidebar></app-sidebar>
      <div class="ui divided items">
        <app-article *ngFor="let article of articles" [article]="article" class="item"></app-article>
      </div>
    </div>
  `
})
export class AppComponent {
  articles: Object[];  // Instance of a class AppComponent  or Instance variable for class AppComponent 

  constructor() {
    this.articles = [
      new Article(
      'The angular 2  screencast',
      'The easiest way to learn angular js'
      ),
      new Article(
      'React',
      'Wanna learn React js'
      ),
    new Article(
      'Vue',
      'The easiest way to learn angular js'
    )
  ];
  }
}
