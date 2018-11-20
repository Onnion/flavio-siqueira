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
    // tslint:disable-next-line:max-line-length
    this.frame = this.sanitized.bypassSecurityTrustHtml("<iframe width='560' height='315' src='https://www.youtube.com/embed/ObFCG8xI9u8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
  }

}
