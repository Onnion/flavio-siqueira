import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() content: Content;
  @Input() type: any;

  constructor() { }


  public createText(text: string) {
    let preview = text;

    if (preview.length > 100) {
        preview = preview.substr(0, 155) + '...';
    }

    return preview;
  }


  ngOnInit() { }


}
