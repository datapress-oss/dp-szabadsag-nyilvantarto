import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true, }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      ),
    ])
  ]);
export const fadeAnimation2 =
  trigger('fadeAnimation2', [
    transition('void => *', [
      query(
        ':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true, }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('2s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])

  ]);



