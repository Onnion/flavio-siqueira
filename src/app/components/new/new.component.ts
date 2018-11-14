import { Component, OnInit, Input } from '@angular/core';
import { New } from '../../models/new.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Input() new: New;

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
