import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-header',
  templateUrl: './media-header.component.html',
  styleUrls: ['./media-header.component.scss']
})
export class MediaHeaderComponent implements OnInit {


  @Input() type: any;

  constructor() { }

  ngOnInit() {
  }

}
