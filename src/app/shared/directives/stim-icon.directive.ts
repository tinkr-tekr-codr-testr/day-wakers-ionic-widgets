/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { STIM_TYPES } from '../models/StimTypes';

import { IconComponent } from '../components/icon/icon.component';

@Directive({
  selector: '[icon]'
})
export class StimIconDirective implements OnInit {

@Input({required:true}) icon !: STIM_TYPES;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    const element = this.el.nativeElement.querySelector('.icon');


    switch(this.icon){
      case STIM_TYPES.Tokens : this.icon.innerHTML = 
    }
  }

}
