import {Component, OnInit} from '@angular/core';
import {TileAttributes} from '../../pojo/tile-attributes';

@Component({
    selector: 'skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    tileList: Array<TileAttributes> = [
        {'name': 'ANGULAR', 'image': 'assets/images/skills/angular_logo.png'},
        {'name': 'SPRING', 'image': 'assets/images/skills/spring_logo.png'},
        {'name': 'DJANGO', 'image': 'assets/images/skills/django_logo.png'},
        {'name': 'REACT', 'image': 'assets/images/skills/react_logo.png'},
        {'name': 'HTML5', 'image': 'assets/images/skills/html5_logo.png'},
        {'name': 'CSS3', 'image': 'assets/images/skills/css3_logo.png'},
        {'name': 'JAVASCRIPT', 'image': 'assets/images/skills/javascript_logo.png'},
        {'name': 'TYPESCRIPT', 'image': 'assets/images/skills/typescript_logo.png'},
        {'name': 'RXJS', 'image': 'assets/images/skills/rxjs_logo.png'},
        {'name': 'NGRX', 'image': 'assets/images/skills/ngrx_logo.png'},
        {'name': 'REDUX', 'image': 'assets/images/skills/redux_logo.png'},
        {'name': 'NODE', 'image': 'assets/images/skills/node_logo.png'},
        {'name': 'JAVA', 'image': 'assets/images/skills/java_logo.png'},
        {'name': 'PYTHON', 'image': 'assets/images/skills/python_logo.png'},
        {'name': 'KOTLIN', 'image': 'assets/images/skills/kotlin_logo.png'},
        {'name': 'ANDROID', 'image': 'assets/images/skills/android_logo.png'},
        {'name': 'DOCKER', 'image': 'assets/images/skills/docker_logo.png'},
        {'name': 'POSTGRES', 'image': 'assets/images/skills/postgres_logo.png'},
        {'name': 'GIT', 'image': 'assets/images/skills/git_logo.png'},
        {'name': 'GCP', 'image': 'assets/images/skills/gcp_logo.png'},
        {'name': 'JENKINS', 'image': 'assets/images/skills/jenkins_logo.png'},
        {'name': 'LOCUST', 'image': 'assets/images/skills/locust_logo.png'},
        {'name': 'NGINX', 'image': 'assets/images/skills/nginx_logo.png'},
        {'name': 'RABBITMQ', 'image': 'assets/images/skills/rabbitmq_logo.png'},
        {'name': 'JQUERY', 'image': 'assets/images/skills/jquery_logo.png'},
        {'name': 'LEAFLET', 'image': 'assets/images/skills/leaflet_logo.png'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    initializeTiles() {
        this.tileList.push();
    }

}
