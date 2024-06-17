import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', animate('300ms ease-in')),
  transition(':leave', animate('300ms ease-out'))
]);
