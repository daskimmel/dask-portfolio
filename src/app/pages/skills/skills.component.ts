import {Component, OnInit} from '@angular/core';
import {TileAttributes} from '../../pojo/tile-attributes';

@Component({
    selector: 'skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    tileList: Array<TileAttributes> = [
        {'name': 'ANGULAR', 'image': 'assets/images/angular_logo.png'},
        {'name': 'SPRING', 'image': 'assets/images/spring_logo.png'},
        {'name': 'DJANGO', 'image': 'assets/images/django_logo.png'},
        {'name': 'REACT', 'image': 'assets/images/react_logo.png'},
        {'name': 'HTML5', 'image': 'assets/images/html5_logo.png'},
        {'name': 'CSS3', 'image': 'assets/images/css3_logo.png'},
        {'name': 'JAVASCRIPT', 'image': 'assets/images/javascript_logo.png'},
        {'name': 'TYPESCRIPT', 'image': 'assets/images/typescript_logo.png'},
        {'name': 'RXJS', 'image': 'assets/images/rxjs_logo.png'},
        {'name': 'NGRX', 'image': 'assets/images/ngrx_logo.png'},
        {'name': 'REDUX', 'image': 'assets/images/redux_logo.png'},
        {'name': 'NODE', 'image': 'assets/images/node_logo.png'},
        {'name': 'JAVA', 'image': 'assets/images/java_logo.png'},
        {'name': 'PYTHON', 'image': 'assets/images/python_logo.png'},
        {'name': 'DOCKER', 'image': 'assets/images/docker_logo.png'},
        {'name': 'POSTGRES', 'image': 'assets/images/postgres_logo.png'},
        {'name': 'GIT', 'image': 'assets/images/git_logo.png'},
        {'name': 'KOTLIN', 'image': 'assets/images/kotlin_logo.png'},
        {'name': 'GCP', 'image': 'assets/images/gcp_logo.png'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    initializeTiles() {
        this.tileList.push();
    }

}
