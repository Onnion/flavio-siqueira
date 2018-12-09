import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Menu } from 'app/models/menu.model';
import { listContent } from 'app/helpers/animations/animations';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
  animations: [listContent]
})
export class DisplayDataComponent implements OnInit, OnDestroy, OnChanges {

  @Input() data: any;
  @Input() type: Menu;
  @Output() selectVideo: EventEmitter<any> = new EventEmitter<any>()

  public contents: any[];
  public pagination: any;

  constructor() { }


  ngOnChanges(changes: SimpleChanges) {

    const contents = changes.data;

    if (contents && contents.previousValue !== contents.currentValue) {

      if (contents.currentValue.data && contents.currentValue.data.length > 0) {
        this.contents = contents.currentValue.data;
        this.pagination = contents.currentValue.meta.pagination;

      } else {
        this.contents = [];
        this.pagination = null;

      }

    }

  }


  public select($event: any): void {
    this.selectVideo.emit($event);
  }


  ngOnInit() {

  }


  ngOnDestroy() {
    // this.parentObservable.unsubscribre();
  }

}
