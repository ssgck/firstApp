import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-other',
  templateUrl: './other.component.html',
  styles: [`h1{
  	color: yellow;
  }`]
})
export class OtherComponent  {

  stringInterpolation = 'Hello stringInterpolation';
}
