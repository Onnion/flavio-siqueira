import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit, OnDestroy, OnChanges {

  @Input() data: any;
  @Input() type: any;

  // private parentObservable: Subscriber;

  constructor() { }


  ngOnChanges(cahges: SimpleChanges) {

  }


  ngOnInit() {

  }


  ngOnDestroy() {
    // this.parentObservable.unsubscribre();
  }

}
