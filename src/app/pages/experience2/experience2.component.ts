import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {ExperienceAttributes} from '../../pojo/experience-attributes';
import {Experience2CardComponent} from '../../ui/experience2-card/experience2-card.component';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
    selector: 'experience2-component',
    templateUrl: './experience2.component.html',
    styleUrls: ['./experience2.component.scss']
})
export class Experience2Component implements AfterViewInit {

    @ViewChildren(Experience2CardComponent) experienceCards: QueryList<Experience2CardComponent>;

    experienceAttributes: Array<ExperienceAttributes> = [
        {'header': 'Charter', 'body': 'Full-stack development with React and Node, working to automate the manual testing processes' +
                'that have existed for telecommunications hardware within our organization. Using agile methodology to efficiently build' +
                '',
            images: ['assets/images/experience/charter_logo.png'],
            secondaryImages: [
                'assets/images/skills/react_logo.png',
                'assets/images/skills/node_logo.png',
                'assets/images/skills/angular_logo.png',
                'assets/images/skills/html5_logo.png',
                'assets/images/skills/css3_logo.png',
                'assets/images/skills/javascript_logo.png',
                'assets/images/skills/aggrid_logo.png',
                'assets/images/skills/formik_logo.png',
            ],
            color: '#f4ecff'
        },
        {'header': 'Corelogic', 'body': 'Full-stack development centered around Spring Boot and Angular to create internal tools for our ' +
                'GIS and address processing teams. Using the extreme programming methodology allowed our team to produce high-quality code ' +
                'while dealing with ever-evolving requirements. My team largely focused on building APIs with the MVC pattern and PostgreSQL ' +
                'databases as well as the corresponding front-end applications to interface with them. ',
            images: ['assets/images/experience/corelogic_logo.png'],
            secondaryImages: [
                'assets/images/skills/spring_logo.png',
                'assets/images/skills/java_logo.png',
                'assets/images/skills/angular_logo.png',
                'assets/images/skills/ngrx_logo.png',
                'assets/images/skills/rxjs_logo.png',
                'assets/images/skills/html5_logo.png',
                'assets/images/skills/css3_logo.png',
                'assets/images/skills/javascript_logo.png',
                'assets/images/skills/typescript_logo.png',
            ],
            color: '#eadafd'
        },
        {'header': 'Diamond Edge Services', 'body': 'Automated a system that tracked, calculated, and updated live oil pipeline data based' +
                ' on SMS input from workers in the field. Complete with a full administrative dashboard and unique views for each of their' +
                ' customers, this project resulted in a powerful system that saved Diamond Edge Services hundreds of man-hours and thousands ' +
                'of dollars per month and enabled the company to offer additional services to increase their revenue.',
            images: ['assets/images/experience/diamond_edge_logo.png', 'assets/images/experience/titan_logo.png'],
            secondaryImages: [
                'assets/images/skills/django_logo.png',
                'assets/images/skills/python_logo.png',
                'assets/images/skills/postgres_logo.png',
                'assets/images/skills/html5_logo.png',
                'assets/images/skills/css3_logo.png',
                'assets/images/skills/javascript_logo.png',
            ],
            color: '#e0ccfb'
        },
        {
            'header': 'Transporta Solutions', 'body': 'Built an SQL database and backend system using Python and PostGres to create an efficient ' +
                'and well designed system. Decreased customer drop-off rate by 40% by designing simple on-boarding experiences and increased ' +
                'overall UX by focusing on User Centered Design principles. Developed extensive front-end using JavaScript with HTML5, CSS3, ' +
                'HTTP/HTTPS coordination and URL mapping, all tied together with the Django web framework and ReactJS. ',
            images: ['assets/images/experience/transporta.png'],
            secondaryImages: [
                'assets/images/skills/django_logo.png',
                'assets/images/skills/react_logo.png',
                'assets/images/skills/postgres_logo.png',
                'assets/images/skills/python_logo.png',
                'assets/images/skills/html5_logo.png',
                'assets/images/skills/css3_logo.png',
                'assets/images/skills/javascript_logo.png',
            ],
            color: '#d6b6ff'
        },
        {'header': 'MSU Denver', 'body': 'The beginning of my adventure into software development. I have been attending university intermittently ' +
                'since this time, only to take breaks as I have been given opportunities to work in the field and improve my skills with hands-on experience. ' +
                'As of February 2020, I have 18 credits left to finish my degree, slowly chipping away at my classes while honing my development ' +
                'abilities.',
            images: ['assets/images/experience/msu_denver_logo.png'],
            color: '#c79dfd'
        },
    ];

    private selectedCard: number = 4;

    private setSelectedCard(index){
        this.selectedCard = index;
    }

    constructor(private elem: ElementRef) {
    }

    ngAfterViewInit(): void {
        interval(700).pipe(take(1)).subscribe(() => {
            this.setSelectedCard(0);
        });
    }

}
