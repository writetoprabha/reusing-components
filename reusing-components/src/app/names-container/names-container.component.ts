import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names-container',
  templateUrl: './names-container.component.html',
  styleUrls: ['./names-container.component.css']
})
export class NamesContainerComponent implements OnInit {
  nameList:String[] = ['John', 'Rudy', 'Rusty', 'Bill','Wallace'];
  constructor() { }

  ngOnInit() {
  }

}
