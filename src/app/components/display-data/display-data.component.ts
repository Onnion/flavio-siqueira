import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Menu } from 'app/models/menu.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit, OnDestroy, OnChanges {

  @Input() data: any;
  @Input() type: Menu;

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


  ngOnInit() {

  }


  ngOnDestroy() {
    // this.parentObservable.unsubscribre();
  }

}
