import { Injectable } from '@angular/core';
import { Article } from './article';
@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Article[]{
    return[
      new Article(
        'Angualr',
        'hariprasad kool is awesome'
      )
    ]
  }
}
