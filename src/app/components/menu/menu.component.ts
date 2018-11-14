import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from 'app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public selected: 'news'|'videos'|'articles'|'decisions';
  public menuItens: Menu[] = [
    {value: 'news', label: 'Notícias', icon: 'fa fa-newspaper'},
    {value: 'videos', label: 'Vídeos', icon: 'fab fa-youtube'},
    {value: 'articles', label: 'Artigos', icon: 'fa fa-newspaper'},
    {value: 'decisions', label: 'Decisões', icon: 'fa fa-newspaper'}
  ];


  @Output() selectMenu: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }


  public select(type: Menu): void {
    this.selected = type.value;
    this.selectMenu.emit(type);
  }


  ngOnInit() {
    this.select(this.menuItens[0]);
  }

}
