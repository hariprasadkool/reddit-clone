import { Component,Input } from '@angular/core';



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
  template: `<div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>
  </div>`
})
export class ArticleComponent{
  // @Input() article: Object;
  @Input() article: Article;
}

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content">
        <app-article *ngFor="let article of articles" [article]="article"></app-article>
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
