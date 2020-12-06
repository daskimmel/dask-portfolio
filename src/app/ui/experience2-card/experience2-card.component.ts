import {Component, Input, OnInit} from '@angular/core';
import {ExperienceAttributes} from '../../pojo/experience-attributes';

@Component({
  selector: 'experience2-card-component',
  templateUrl: './experience2-card.component.html',
  styleUrls: ['./experience2-card.component.scss']
})
export class Experience2CardComponent implements OnInit {

  @Input() experienceAttributes: ExperienceAttributes;

  constructor() { }

  ngOnInit() {
  }

}
