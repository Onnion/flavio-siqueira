import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentsService } from 'app/services/contents/contents.service';
import { Content } from 'app/models/content.model';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit, OnDestroy {
  @Input() content: Content;


  constructor(private meta: Meta, private title: Title, private sanitized: DomSanitizer) {

  }


  public getUrlText(url: string): string {
    return `${url.substring(1, 40)}...`;
  }


  public safeContent(text: string): any {
    return this.sanitized.bypassSecurityTrustHtml(text);
  }


  ngOnInit() {
    if (this.content) {
      // this.meta.updateTag({ name: 'og:image', content: 'http://via.placeholder.com/211x50' });
      this.meta.updateTag({ property: 'og:title', content: `Property Solutions | ${this.content.title}` });
      this.title.setTitle(`Property Solutions | ${this.content.title}`)
    }
  }


  ngOnDestroy() {
    this.meta.updateTag({ property: 'og:title', content: 'Property Solutions' });
    this.title.setTitle('Property Solutions')

  }

}
