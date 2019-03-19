import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  public title = 'Property Solutions, sala 606';
  public lat = -8.12269631;
  public lng = -34.90423501;


  constructor() { }


  ngOnInit() {
  }


}
