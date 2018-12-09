import { animation, animate, keyframes, style, trigger, transition, query, group, stagger } from '@angular/animations';

const DEFAULT_TIMING = 1;

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' })
            , { optional: true }),
        query('.block', style({ opacity: 0 }), { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ]),
        query(':enter .block', stagger(400, [
            style({ transform: 'translateY(100px)' }),
            animate('1s ease-in-out',
                style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);

export const bounceIn = animation(
    animate(
        '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        keyframes([
            style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
            style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
            style({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
            style({
                opacity: 1,
                transform: 'scale3d(1.03, 1.03, 1.03)',
                offset: 0.6
            }),
            style({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
            style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
        ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const listContent = trigger('listContent', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('150ms', [
            animate('300ms cubic-bezier(.25,.75,.5,1.25)', keyframes([
                style({ opacity: 0, transform: 'translate3d(0,100%,0)'}),
                style({ opacity: .5, transform: ' translate3d(0,50%,0)'}),
                style({ opacity: 1, transform: ' translate3d(0,0,0)'}),

            ]))

        ]), { optional: true }),

    ])
]);
