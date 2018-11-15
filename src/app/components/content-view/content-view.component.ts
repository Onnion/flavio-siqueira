import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentsService } from 'app/services/contents/contents.service';
import { Content } from 'app/models/content.model';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {
  @Input() content: Content;


  constructor() { }


  public getUrlText(url: string): string {
    return `${url.substring(1, 40)}...`;
  }


  ngOnInit() { }


}
