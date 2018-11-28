import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() content: any;
  @Input() type: any;
  @Output() selectVideo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }


  public createText(text: string) {
    let preview = text;

    if (preview.length > 100) {
        preview = preview.substr(0, 155) + '...';
    }

    return preview;
  }


  public select(): void {
    this.selectVideo.emit(this.content);
  }


  ngOnInit() { }


}
