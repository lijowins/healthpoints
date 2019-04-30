import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackables',
  templateUrl: './trackables.component.html',
  styleUrls: ['./trackables.component.css']
})
export class TrackablesComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 90;
  diameter = 40;
  strokewidth = 5;

  constructor() { }

  ngOnInit() {
  }

  selectCategory(id:string, category:string)
  {
    
  }
}
