import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {ExperienceAttributes} from 'src/app/pojo/experience-attributes';
import {Experience2CardComponent} from 'src/app/ui/experience2-card/experience2-card.component';
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
        {'header': 'Charter', 'body': 'Full-stack development with React, Node, and Python, working to automate the manual testing processes ' +
                'that have existed for telecommunications hardware within our organization. Using agile methodology to efficiently build ' +
                'a number of microservices with constantly changing requirements, my team went above and beyond to develop quality products for ' +
                'our customers that were always delivered on time.',
            images: ['assets/images/experience/charter_logo.png'],
            secondaryImages: [
                'assets/images/skills/react_logo.png',
                'assets/images/skills/node_logo.png',
                'assets/images/skills/python_logo.png',
                'assets/images/skills/html5_logo.png',
                'assets/images/skills/css3_logo.png',
                'assets/images/skills/javascript_logo.png',
                'assets/images/skills/aggrid_logo.png',
                'assets/images/skills/formik_logo.png',
                'assets/images/skills/mysql_logo.png',
                'assets/images/skills/git_logo.png',
            ],
            color: '#e0ccfb'
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
                'assets/images/skills/git_logo.png',
            ],
            color: '#d6b6ff'
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
                'assets/images/skills/git_logo.png',
            ],
            color: '#c79dfd'
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
                'assets/images/skills/git_logo.png',
            ],
            color: '#d6b6ff'
        },
        {'header': 'MSU Denver', 'body': 'The beginning of my adventure into software development. ' +
                'My time at MSU Denver helped me to build my core foundation of knowledge that has gotten me to where I am now.  ' +
                'The experience gained during my time at the university was the beginning of a never-ending journey to learn ' +
                'as much as I can about software development and the world surrounding it. Building a strong base of skills ' +
                'at MSU Denver has surely contributed to success in my career ' +
                'and I am grateful for having spent time learning at this institution.' ,
            images: ['assets/images/experience/msu_denver_logo.png'],
            color: '#e0ccfb'
        },
    ];

    private maxCardIndex = this.experienceAttributes.length - 1;
    private selectedCard: number = this.maxCardIndex;

    constructor(private elem: ElementRef) {
    }

    ngAfterViewInit(): void {
        interval(700).pipe(take(1)).subscribe(() => {
            this.setSelectedCard(0);
        });
    }

    private setSelectedCard(index){
        this.selectedCard = index;
    }

    private setNextCard(){
        if(this.selectedCard < this.maxCardIndex){
            this.setSelectedCard(this.selectedCard + 1);
        }
        else{
            this.setSelectedCard(0);
        }
    }

    private setPreviousCard(){
        if(this.selectedCard > 0){
            this.setSelectedCard(this.selectedCard - 1);
        }
        else{
            this.setSelectedCard(this.maxCardIndex);
        }
    }

    private calculateHex(color) {
        color = Math.round(color);
        if (color < 0){
            color = 0;
        }else if (color > 255){
            color = 255;
        }

        let s = color.toString(16);

        return s.length < 2 ? "0" + s : s;
    }

    private color2Hex(r, g, b) {
        return "#" + this.calculateHex(r) + this.calculateHex(g) + this.calculateHex(b);
    }

    private darkenBackgroundColor(color: string){
        const shade = 0.6;

        const r = parseInt(color.substr(1, 2), 16) * shade;
        const g = parseInt(color.substr(3, 2), 16) * shade;
        const b = parseInt(color.substr(5, 2), 16) * shade;

        return this.color2Hex(r, g, b);
    }

}
