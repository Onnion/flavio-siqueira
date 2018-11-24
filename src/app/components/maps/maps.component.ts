import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  public title = 'Property Solutions, sala 606';
  public lat = -8.046716;
  public lng = -34.8919388;


  constructor() { }


  ngOnInit() {
  }


}
