import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[caVibrate]'
})
export class VibrateDirective {

  constructor() {
/*    document.addEventListener("click", function () {

    })*/
  }

  @HostListener('click', ['$event']) onClick(){
    console.log('Vibrating');
    navigator.vibrate(1000);
  }

}
//käytä host listener on clikc juttua täällä.....$event jne jne jne...
