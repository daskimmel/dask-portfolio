import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tile-component',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
