import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Content } from "app/models/content.model";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  private API_URL = "https://api.propertysolutions.com.br/api";

  constructor(private http: HttpClient) {}

  public sendContact(form: any): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.API_URL}/contacts`, form).subscribe(
        () => {
          observer.next(true);
        },
        error => {
          observer.error(error);
        }
      );
    });
  }
}
