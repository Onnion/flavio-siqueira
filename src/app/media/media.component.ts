import { Component, OnInit, HostListener } from '@angular/core';
import { Menu } from 'app/models/menu.model';
import { ContentsService } from 'app/services/contents/contents.service';

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


  constructor(private contentService: ContentsService) { }



  @HostListener('window:resize', ['$event'])
  onWindowResize($event) {
    const width = $event.target.innerWidth;
    const wraper = document.querySelector('.main-wraper');
    const menu = document.querySelector('.media-menu');
    const classMobile = 'menu-closed';

    if (width <= 768) {

      if (!menu.classList.contains(classMobile) && wraper.classList.contains(classMobile)) {
        console.log(wraper.classList);

      } else {
        menu.classList.add(classMobile);
        wraper.classList.add(classMobile);

      }
    } else {
      menu.classList.remove(classMobile);
      wraper.classList.remove(classMobile);
    }

  }

  public loadData($event: Menu): void {
    this.loading = true;
    this.type = $event;
    this.contentService.get($event.value).subscribe(
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

      }
    );
  }

  ngOnInit() {

  }


}
