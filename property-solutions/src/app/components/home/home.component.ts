import { Component, OnInit } from '@angular/core';
import { ContentsService } from 'src/app/services/contents/contents.service';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading = false;
  public data: any;
  public type: Menu;

  constructor(private contentService: ContentsService) { }


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

      }
    );
  }


  ngOnInit() {
  }


}
