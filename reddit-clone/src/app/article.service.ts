import { Injectable } from '@angular/core';
import { Article } from './article';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';


const baseUrl = 'https://newsapi.org';
const newsApiKey = '93c7586c9e16448c8f83e998603ece62';
@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }

  public getArticles(): Promise<Article[]> {

    // Resolving a promise without promise object creation
    // return Promise.resolve([
    //   new Article(
    //     'Angular',
    //     'hariprasad kool is awesome'
    //   )
    // ]);

    // Creating a Promise object and then resolving a promise
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve([
    //     new Article(
    //       'Angular',
    //       'hariprasadkool is awesome'
    //     )
    //   ]);
    //   }, 2000);
    // });

    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', 'reddit-r-all');
    return this.http                              // http request returns observables
        // .get(baseUrl + '/v1/articles')         // Before ES6 we directly hard code part of the url inside the string
        .get(`${environment.baseUrl}/v1/articles`,{search: params})            // Using ES6 style of backticks with string interpolation(${} = Dollar sign squiggly brackets)
        .toPromise()                              // using rxjs we can convert observables into promise
        .then( resp => { return resp.json(); })
        .then( json => json.articles )
        .then( articles => {
          console.log('json->', articles);
          return articles.map(article => Article.fromJSON(article));
          // console.log('json->', list);
          // return list;
        })
        .catch(err => {
          console.log(err);
        });
  }
}
