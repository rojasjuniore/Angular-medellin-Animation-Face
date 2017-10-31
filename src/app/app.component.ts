import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('faceAnimated', [

      transition('* => round', [
        animate(1000, style({ borderRadius: '100%' }))
      ]),
      state('round', style({ borderRadius: '100%' })),

      transition('* => rotate', [
        animate(4500, keyframes([
          style({ transform: 'rotateX(180deg)', offset: 0.3 }),
          style({ transform: 'rotateX(0deg)', offset: 0.7 })
        ])
        )
      ]),

      transition('* => crazy', [
        animate(4000,
          style({ transform: 'rotate(1000deg) scale3d(0.8, 2, 1)' })
        )
      ]),

      transition('* => hinge', [
        animate(3000, keyframes([
          style({ transform: 'rotate(0deg)', transformOrigin: 'top left', offset: 0.1 }),
          style({ transform: 'rotate(80deg)', transformOrigin: 'top left', offset: 0.3 }),
          style({ transform: 'rotate(40deg)', transformOrigin: 'top left', offset: 0.4 }),
          style({ transform: 'rotate(80deg) ', transformOrigin: 'top left', offset: 0.6 }),
          style({ opacity: 0, offset: 0.8 }),
        ])
        )
      ]),
    ]),
    trigger('container', [
      transition('* => bye',
        query('.bye', [
          stagger(500, [
            animate('0.5s', style({ opacity: 0 }))
          ]),
        ])),
      state('bye', style({ opacity: 0 })),
    ])
  ]
})
export class AppComponent implements OnInit {
  private faceEffect = '';
  private containerEffect = '';
  private URI = 'https://api.adorable.io/avatars/';
  private url = '';
  private backgroundPhoto = '';

  ngOnInit() {
    setInterval(() => {
      this.getface();
    }, 2000);
  }
  private changeEffectFace(_effect: string): void {
    this.faceEffect = _effect;
  }

  private changeEffectContainer(_effect: string): void {
    this.containerEffect = _effect;
  }

  private clearEffect(): void {
    this.faceEffect = '';
  }


  private getface() {
    const face = Math.random();
    const photo = Math.random() * 1000;
    this.backgroundPhoto = `${this.URI}${photo}`;
    this.url = `${this.URI}${face}`;
  }
}