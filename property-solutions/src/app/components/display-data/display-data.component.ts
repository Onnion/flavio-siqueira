import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import {ContentsService} from '../../services/contents/contents.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit, OnDestroy {

  @Input() subDi: Observable<any>;
  // private parentObservable: Subscriber;

  constructor(private contentService: ContentsService) { }

  ngOnInit() {

    this.subDi.subscribe(
      (type: 'news'|'videos'|'articles'|'decisions') => {
        this.contentService.get(type).subscribe(
          () => {}
        );
      }
    );
  }

  ngOnDestroy() {
    // this.parentObservable.unsubscribre();
  }

}
