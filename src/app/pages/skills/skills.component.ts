import {Component, OnInit} from '@angular/core';
import {TileAttributes} from '../../pojo/tile-attributes';

@Component({
    selector: 'skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    tileList: Array<TileAttributes> = [
        {'name': 'angular', 'image': 'assets/images/angular_logo.png'},
        {'name': 'spring', 'image': 'assets/images/spring_logo.png'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    initializeTiles() {
        this.tileList.push();
    }

}
