import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'payfriends-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {

  @Input() theme: string = 'blue'

  constructor() { }

  ngOnInit() {}

}
