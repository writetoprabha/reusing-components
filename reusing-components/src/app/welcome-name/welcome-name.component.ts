import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-name',
  templateUrl: './welcome-name.component.html',
  styleUrls: ['./welcome-name.component.css']
})
export class WelcomeNameComponent implements OnInit {
  @Input() name:String;
  constructor() { }

  ngOnInit() {
  }

}
