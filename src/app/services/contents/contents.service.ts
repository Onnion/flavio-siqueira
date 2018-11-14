import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContentsService {
  private API_URL = 'http://api.propertysolutions.com.br/api';


  constructor(private http: HttpClient) {
    console.log('created')
   }


  public get(type: 'news'|'videos'|'articles'|'decisions'): Observable<any> {
    return this.http.get(`${this.API_URL}/contents/${type}`);

  }


}
