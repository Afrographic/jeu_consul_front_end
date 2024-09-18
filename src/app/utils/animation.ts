import { trigger, state, style, animate, transition, query, group } from '@angular/animations';
export const c_transition = [
    trigger(
        'transition',
        [
            transition(
                ':enter',
                [
                    style({ transform: 'translateY(10px)', opacity: 0 }),
                    animate('0.25s ease-out',
                        style({ transform: 'translateY(0px)', opacity: 1 }))
                ]
            ),
            transition(
                ':leave',
                [
                    style({ transform: 'translateY(0px)', opacity: 1 }),
                    animate('0.25s ease-in',
                        style({ transform: 'translateY(10px)', opacity: 0 }))
                ]
            )
        ]
    )
];

export const route_transition = trigger('route_transition', [
    // Transition between any two states
    transition('* <=> *', [
        // Events to apply
        // Defined style and animation function to apply
        // Config object with optional set to true to handle when element not yet added to the DOM
        query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        // group block executes in parallel
        group([
            query(':enter', [
                style({ transform: 'translateY(10px)', opacity: 0 }),
                animate('0.25s ease-out',
                    style({ transform: 'translateY(0px)', opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateY(0px)', opacity: 1 }),
                animate('0.25s ease-in',
                    style({ transform: 'translateY(10px)', opacity: 0 }))
            ], { optional: true })
        ])
    ])
]);
