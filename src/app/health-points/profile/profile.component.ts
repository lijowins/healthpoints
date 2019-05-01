import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileName: string = '';
  userName: string = '';
  imageUrl: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private profileService: ProfileService,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.profileName = this.dataService.currentUser.FIRST_NAME + " " +this.dataService.currentUser.LAST_NAME;
    console.log(this.dataService.currentUser);
    //this.imageUrl = this.dataService.currentUser.AVATAR;
    this.firstName = this.dataService.currentUser.FIRST_NAME;
    this.lastName = this.dataService.currentUser.LAST_NAME;
    this.userName = this.dataService.currentUser.USERNAME;
  }
}
