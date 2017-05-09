import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[caVibrate]'
})
export class VibrateDirective {

  constructor() {}

  @HostListener('click', ['$event']) onClick(){
    console.log('Vibrating');
    navigator.vibrate(1000);
  }
}
