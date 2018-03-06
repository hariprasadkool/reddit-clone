import { Component,Input } from '@angular/core';

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
  @Input() article: Object;
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
    this.articles = [{
      title: 'The angular 2  screencast',
      description: 'The easiest way to learn angular js'
    }, {
      title: 'React',
      description: 'Wanna learn React js'
    }, {
      title: 'Vue',
      description: 'The easiest way to learn angular js'
    }
  ];
  }
}
