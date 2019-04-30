import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public title:string = 'HealthPoints';

  constructor(
    private router: Router, 
    private dataService:DataService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.dataService.currentUser = null;
    this.router.navigate(['/healthpoints/login']);
  }

  goToProfile(){
    this.router.navigate(['/healthpoints/profile']);
  }
}
