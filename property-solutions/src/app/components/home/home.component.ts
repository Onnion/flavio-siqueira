import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private displayDataEmitter: Subject<any>;

  constructor() { }


  public loadData($event: 'news'|'videos'|'articles'|'decisions'): void {
    this.displayDataEmitter.next($event);
  }


  ngOnInit() {
  }


}
