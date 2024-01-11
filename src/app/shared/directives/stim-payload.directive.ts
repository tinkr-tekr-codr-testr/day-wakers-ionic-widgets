import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[payload]'
})
export class StimPayloadDirective implements OnInit, OnDestroy {

  @Input() payload !: string[];
  displayInterval !: NodeJS.Timeout
  constructor(private el: ElementRef) { }

  ngOnInit(){
    const element = this.el.nativeElement.querySelector('.payload');
    this.displayInterval = setInterval(()=>{
      element.innerHTML = this.selectDisplay();
    },500)
  }

  ngOnDestroy(){
    clearInterval(this.displayInterval);
  }

  selectDisplay(){
    const index = Math.floor(Math.random()*this.payload.length);
    return this.payload[index];
  }
}
