import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from 'app/models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public selected: 'news'|'videos'|'articles'|'decisions';
  public menuItens: Menu[] = [
    {min: 'artigo', value: 'articles', label: 'Artigos', icon: 'fa fa-newspaper-o'},
    {min: 'decisao', value: 'decisions', label: 'Decisões', icon: 'fa fa-newspaper-o'},
    {min: 'noticia', value: 'news', label: 'Notícias', icon: 'fa fa-newspaper-o'},
    {min: 'video', value: 'videos', label: 'Vídeos', icon: 'fa fa-youtube'}
  ];


  @Output() selectMenu: EventEmitter<any> = new EventEmitter<any>();


  constructor(private router: Router) { }


  public select(type: Menu, click: boolean = true): void {
    console.log(type);
    this.selected = type.value;

    if (click) {
      this.router.navigate(['/midia']);

    }

    this.selectMenu.emit({type, click});
  }


  ngOnInit() {
    this.select(this.menuItens[0], false);
  }

}
