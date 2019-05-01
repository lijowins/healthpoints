import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackables',
  templateUrl: './trackables.component.html',
  styleUrls: ['./trackables.component.css']
})
export class TrackablesComponent implements OnInit {

  public trackables: any = null;
  constructor(private profileService: ProfileService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getMyTrackables();
  }

  selectCategory(id: string, category: string) {

  }

  getMyTrackables() {
    let profileId = this.dataService.currentUser.ID;
    this.profileService.getTrackablesByProfile(profileId).subscribe(
      result => {
        this.trackables = result.data;
        this.trackables.forEach(element => {
          if (element.TRACKABLE_CATEGORY_ID == "30971cb0-b1e2-431d-8042-7a96153fc8aa")
            element.MatIcon = "directions_walk";
          else if (element.TRACKABLE_CATEGORY_ID == "57598f89-66ae-4fdc-9f8f-14e7c33cf970")
            element.MatIcon = "fastfood";
          else if(element.TRACKABLE_CATEGORY_ID == "0aa7a56f-024a-46fd-bba9-17d0baf35cad")
            element.MatIcon = "favorite";
        });
        this.dataService.trackables = this.trackables;
        this.getLogs(profileId);
      },
      error => {

      });
  }

  private getLogs(profileId: any) {
    this.profileService.getAllLogs().subscribe(result => {
      let logs = result.data;
      this.trackables.forEach(element => {
        element.Points = logs.filter(x=>x.TRACKABLE_ID == element.ID).reduce((sum, item) => sum + item.POINTS_EARNED, 0);
      });
    });
  }

  openLogs(id: string){
    this.router.navigate(['/healthpoints/trackables', id]);
  }
}
