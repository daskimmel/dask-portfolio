import {Component, Input, OnInit} from '@angular/core';
import {ExperienceAttributes} from '../../pojo/experience-attributes';

@Component({
  selector: 'experience-card-component',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {

  @Input() experienceAttributes: ExperienceAttributes;

  constructor() { }

  ngOnInit() {
  }

}
