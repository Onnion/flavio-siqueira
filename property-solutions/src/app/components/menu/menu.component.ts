import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() selectMenu: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }


  public select(type: 'news'|'videos'|'articles'|'decisions'): void {
    this.selectMenu.emit(type);
  }


  ngOnInit() {
  }

}
