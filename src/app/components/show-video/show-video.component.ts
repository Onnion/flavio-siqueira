import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.scss']
})
export class ShowVideoComponent implements OnInit {

  @Input() video: any;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  public frame: any;


  constructor(private sanitized: DomSanitizer) { }


  public closeVideo(): void {
    this.close.emit(true);
  }

  ngOnInit() {
    this.frame = this.sanitized.bypassSecurityTrustHtml(this.video.embed);
  }

}
