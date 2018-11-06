import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { }


  public createText(text: string) {
    let preview = text;

    // if (preview.length > 100) {
    //     preview = preview.substr(0, 155) + '...';
    // }

    return preview;
  }


  ngOnInit() { }


}
