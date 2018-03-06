import { Injectable } from '@angular/core';
import { Article } from './article';
@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Promise<Article[]> {
    //
    // return Promise.resolve([
    //   new Article(
    //     'Angular',
    //     'hariprasad kool is awesome'
    //   )
    // ]);

    // Creating a Promise object
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
        new Article(
          'Angular',
          'hariprasadkool is awesome'
        )
      ]);
      }, 2000);
    });



  }
}
