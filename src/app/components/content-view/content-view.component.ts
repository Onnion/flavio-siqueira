import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentsService } from 'app/services/contents/contents.service';
import { Content } from 'app/models/content.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit, OnDestroy {
  @Input() content: Content;


  constructor(private meta: Meta, private title: Title) {

  }


  public getUrlText(url: string): string {
    return `${url.substring(1, 40)}...`;
  }


  ngOnInit() {
    if (this.content) {
      // this.meta.updateTag({ name: 'og:image', content: 'http://via.placeholder.com/211x50' });
      this.meta.updateTag({ name: 'og:title', content: `Property Solutions | ${this.content.title}` });
      this.title.setTitle(`Property Solutions | ${this.content.title}`)
    }
  }


  ngOnDestroy() {
    this.meta.updateTag({ name: 'og:title', content: 'Property Solutions' });
    this.title.setTitle('Property Solutions')

  }

}
