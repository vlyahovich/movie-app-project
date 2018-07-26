import {trigger, query, animate, style, transition} from '@angular/animations';

export function routerTransition() {
    return fadeInOut();
}

export function fadeInOut() {
    return trigger('routerTransition', [
        transition('* => *', [
            query(':enter',
                [style({opacity: 0})],
                {optional: true}
            ),
            query(':leave',
                [style({opacity: 1}), animate('0.3s ease-in-out', style({opacity: 0}))],
                {optional: true}
            ),
            query(':enter',
                [style({opacity: 0}), animate('0.3s ease-in-out', style({opacity: 1}))],
                {optional: true}
            )
        ])
    ]);
}
