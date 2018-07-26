import {trigger, query, keyframes, stagger, animate, style, transition} from '@angular/animations';

export function itemTransition() {
    return flyInOut();
}

export function flyInOut() {
    return trigger('itemTransition', [
        transition('* => *', [

            query(':enter', style({opacity: 0, transform: 'scale(0)'}), {optional: true}),

            query(':enter',  [style({opacity: 0, transform: 'scale(0)'}), animate('0.3s ease-in-out', style({
                opacity: 1,
                transform: 'scale(1)'
            }))], {optional: true}),

            query(':leave', [style({opacity: 1, transform: 'scale(1)'}), animate('0.3s ease-in-out', style({
                opacity: 0,
                transform: 'scale(0)'
            }))], {optional: true})
        ])
    ]);
}
