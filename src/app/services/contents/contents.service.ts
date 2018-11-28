import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from 'app/models/content.model';

@Injectable()
export class ContentsService {
  private API_URL = 'https://api.propertysolutions.com.br/api';


  constructor(private http: HttpClient) {
  }


  public get(type: 'news'|'videos'|'articles'|'decisions'): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${this.API_URL}/${type}`).subscribe(
        (contents: any) => {
          observer.next(contents);
        },
        (error) => {
          observer.error(error);

        }
      );
    });

  }


  public show(type: 'news'|'videos'|'articles'|'decisions', id: number): Observable<Content> {
    return new Observable((observer) => {
      this.http.get(`${this.API_URL}/${type}/${id}`).subscribe(
        (content: any) => {
          observer.next(content.data);
        },
        (error) => {
          observer.error(error);

        }
      );
    });
  }


}
