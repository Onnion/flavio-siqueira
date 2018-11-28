import { Component, OnInit, Output, Input, EventEmitter, AfterViewChecked } from '@angular/core';
import { Menu } from 'app/models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewChecked {

  @Input() type: string;
  @Input() mode: boolean;

  private stateLoad = false;

  public selected: 'news'|'videos'|'articles'|'decisions';
  public menuItens: Menu[] = [
    {min: 'artigos', value: 'articles', label: 'Artigos', icon: 'fa fa-newspaper-o'},
    {min: 'decisoes', value: 'decisions', label: 'Decisões', icon: 'fa fa-newspaper-o'},
    {min: 'noticias', value: 'news', label: 'Notícias', icon: 'fa fa-newspaper-o'},
    {min: 'videos', value: 'videos', label: 'Vídeos', icon: 'fa fa-youtube'}
  ];


  @Output() selectMenu: EventEmitter<any> = new EventEmitter<any>();


  constructor(private router: Router) { }


  public select(type: Menu, click: boolean = true): void {
    this.selected = type.value;

    if ((!this.mode) || (this.mode && this.stateLoad)) {
      if (click) {
        this.router.navigate([`/midia/${type.min}`]);

      }

      this.selectMenu.emit({type, click});
    }

  }


  ngOnInit() {
    this.select(this.menuItens.filter((menu) => menu.value === this.type)[0]);
  }


  ngAfterViewChecked() {
    if (this.mode) {
      this.stateLoad = true;

    }
  }

}
