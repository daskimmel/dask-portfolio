import {Component, Input, OnInit} from '@angular/core';
import {TileAttributes} from '../../pojo/tile-attributes';

@Component({
  selector: 'tile-group-component',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.scss']
})
export class TileGroupComponent implements OnInit {

  @Input() tiles: Array<TileAttributes>;

  constructor() { }

  ngOnInit() {
  }

}
