import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'payfriends-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {

  @Input() name: string = null;

  constructor() { }

  ngOnInit() {}

}
