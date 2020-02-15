import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage => SkillsPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '-200%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('700ms ease-out', style({ right: '200%'}))
                ]),
                query(':enter', [
                    animate('700ms ease-out', style({ right: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('SkillsPage => HomePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                })
            ]),
            query(':enter', [
                style({ left: '-200%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('700ms ease-out', style({ left: '200%'}))
                ]),
                query(':enter', [
                    animate('700ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('SkillsPage => ExperiencePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '-200%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('700ms ease-out', style({ right: '200%'}))
                ]),
                query(':enter', [
                    animate('700ms ease-out', style({ right: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('ExperiencePage => SkillsPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-200%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('700ms ease-out', style({ left: '200%'}))
                ]),
                query(':enter', [
                    animate('700ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('HomePage => ExperiencePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ right: '-200%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('700ms ease-out', style({ right: '200%'}))
                ]),
                query(':enter', [
                    animate('700ms ease-out', style({ right: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('ExperiencePage => HomePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-200%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('700ms ease-out', style({ left: '200%'}))
                ]),
                query(':enter', [
                    animate('700ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
    ]);
