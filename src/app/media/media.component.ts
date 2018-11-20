import { Component, OnInit, HostListener } from '@angular/core';
import { Menu } from 'app/models/menu.model';
import { ContentsService } from 'app/services/contents/contents.service';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'app/models/content.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  providers: [ContentsService]
})
export class MediaComponent implements OnInit {
  public loading = false;
  public data: any;
  public type: Menu;
  public mobile = false;
  public content: Content;
  public showMode = false;
  public showVideo = false;
  private id: number;

  constructor(
    private contentService: ContentsService,
    private route: ActivatedRoute
  ) { }



  @HostListener('window:resize', ['$event'])
  onWindowResize($event) {
    this.mobileMode();
  }


  private mobileMode(): void {
    const width = window.innerWidth;
    const wraper = document.querySelector('.main-wraper');
    const menu = document.querySelector('.media-menu');
    const classMobile = 'menu-closed';

    if (width <= 768) {
      this.mobile = true;

      if (!menu.classList.contains(classMobile) && wraper.classList.contains(classMobile)) {
        console.log(wraper.classList);

      } else {
        menu.classList.add(classMobile);
        wraper.classList.add(classMobile);

      }
    } else {
      this.mobile = false;
      menu.classList.remove(classMobile);
      wraper.classList.remove(classMobile);
    }

  }


  private loadContent(id: number): void {

    this.contentService.show(id).subscribe(
      (content: Content) => {
        this.content = content;
      },
      (error) => {}
    );

  }


  public loadData($event: {type: Menu, click: boolean}): void {

    if (!this.id && $event.click) {
      this.data = [];
      this.showMode = false;

      this.loading = true;
      this.type = $event.type;
      this.contentService.get(this.type.value).subscribe(
        (contents: any) => {
          this.loading = false;
          this.data = contents;
        },
        (error) => {
          this.loading = false;
          this.data = {
            data: [],
            meta: null
          };

      });
    }
  }


  public close($event: boolean): void {
    this.showVideo = false;
  }


  public selectVideo($event: any): void {


  }


  ngOnInit() {
    this.mobileMode();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.showMode = true;
      this.loadContent(this.id);
    }


  }


}
