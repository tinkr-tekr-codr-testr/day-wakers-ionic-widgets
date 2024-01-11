import { Component, Input, OnInit } from '@angular/core';
import { STIM_TYPES } from '../../models/StimTypes';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent  implements OnInit {

  @Input({required:true}) type !: STIM_TYPES;

  constructor() { }

  ngOnInit() {
      
  }

}
