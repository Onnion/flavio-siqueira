import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from 'app/models/content.model';

@Injectable()
export class ContentsService {
  private API_URL = 'http://api.propertysolutions.com.br/api';


  constructor(private http: HttpClient) {
  }


  public get(type: 'news'|'videos'|'articles'|'decisions'): Observable<any> {
    return this.http.get(`${this.API_URL}/contents/${type}`);

  }


  public show(id: number): Observable<Content> {
    return new Observable((observere) => {
      this.http.get(`${this.API_URL}/contents/${id}`).subscribe(
        (content: any) => {
          observere.next(content.data);
        },
        (error) => {
          observere.error(error);

        }
      );
    });
  }


}
